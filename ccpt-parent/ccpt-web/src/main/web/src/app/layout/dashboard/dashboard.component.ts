import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { routerTransition } from '../../router.animations';
import { forkJoin } from 'rxjs';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Keyvalue } from '../modals/action';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Color } from 'ng2-charts';
import { Properties } from '../components/constants/properties';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  //public noOfDays: any = { 'Day': 1, 'Week': 7, 'Month': 30, 'Year': 365 };
  public noOfDays: Array<Keyvalue> = [
    { key: 'Day', value: 1 },
    { key: 'Week', value: 7 },
    { key: 'Month', value: 30 },
    { key: 'Year', value: 365 }
  ];
  public ccptReportCLCH: Array<any> = [];
  public ccptReportCOCH: Array<any> = [];
  public ccptReportCC: any = {};
  public top5ById: any = {};
  public openCP: Array<any> = [];
  public dyingCP: Array<any> = [];
  public caByStatusList: Array<any> = [];
  public activeCA: Array<any> = [];
  public activeCAById: Array<any> = [];
  public cochByIdList: Array<any> = [];
  public clchByIdList: Array<any> = [];
  public interviewsToday: Array<any> = [];
  private urlConstants = new URLConstants();
  public constantProperties = new Properties();
  public rpChoosenDays: any = 7;
  public cochChoosenDays: any = 7;
  public clchChoosenDays: any = 7;
  public listReturned: boolean = false;
  public chartHeight: any;
  public stackChartHeight: any;
  public caStat: any;
  public caStatusList: any;
  public isCollapsed = true;
  public updateIndex: number;
  /** Template references */

  @ViewChild('contentACA')
  private contentACA: TemplateRef<any>;

  private selectedRecrd = 0;
  public closeResult = '';
  private modalRef: NgbModalRef;
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    translate: 'no'
  };

  public getAllReportCLCH = this.http.get(this.urlConstants.CCHGetCountByRecruiter + this.clchChoosenDays);
  public getAllReportCOCH = this.http.get(this.urlConstants.CoCHGetCountByRecruiter + this.cochChoosenDays);
  public getAllReportCC = this.http.get(this.urlConstants.ReportingGetClosures + this.rpChoosenDays);
  public getAllCAStatus = this.http.get(this.urlConstants.CASGetAll + '0&pageSize=100&sortBy=id');
  public getCAStatUPdate = this.http.get(this.urlConstants.DashboardCAStat);
  // public getAllOpenCP = this.http.get(this.urlConstants.ReportingGetAllOpenCP);
  // public getAllActiveCA = this.http.get(this.urlConstants.ReportingGetAllActiveCA);
  // public getAllInterviewsToday = this.http.get(this.urlConstants.ReportingGetAllInterviewsToday);
  // public getAllDyingCP = this.http.get(this.urlConstants.ReportingDyingCp);
  // public getAllCAByStatus = this.http.get(this.urlConstants.ReportingGetAllCAByStatus);
  public getAllDBContent = this.http.get(this.urlConstants.GetAllDashboard);
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            steps: 2,
            stepValue: 2
          }
        }
      ],
      yAxes: [
        {
          barPercentage: 1,
          ticks: {
            fontSize: 10,
            callback: function(label, index, labels) {
              if (/\-/.test(label)) {
                return label.split(/\-/);
              } else {
                return label;
              }
            }
          }
        }
      ]
    }
  };
  public barChartLabels: string[] = [];
  public barChartCAByStautsLabels: string[] = [];
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = false;
  public stackBarChartLegend: boolean = true;

  public barChartActiveCAData: any[] = [{ data: [], label: 'Active Client Applications', cpIds: [] }];
  public barChartColors: Color[] = [{ backgroundColor: '#343a40' }];
  public stackbarChartColors: Color[] = [
    { backgroundColor: '#f88e90' },
    { backgroundColor: '#f88e90' },
    { backgroundColor: '#f88e90' },
    { backgroundColor: '#f88e90' },
    { backgroundColor: '#ffe29a' },
    { backgroundColor: '#ffe29a' },
    { backgroundColor: '#ffe29a' },
    { backgroundColor: '#ffe29a' },
    { backgroundColor: '#46bfbd' }
  ];
  public barChartCAByStatusData: any[] = [];

  constructor(
    private http: HttpClientService,
    private router: Router,
    private toastr: ToastrCustomService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    /*Autheticate user with the token */
    if (!this.http.isAuthenticate()) {
      this.router.navigate(['/login']);
    }
    this.init();
  }
  public init() {
    this.spinner(false);
    this.getAllDBContent.subscribe(resp => {
      let temp = resp as any;
      this.interviewsToday = temp.interviewSummaryStatistics;
      this.openCP = temp.openClientPositions;
      this.dyingCP = temp.dyingClientPositions;
      this.caByStatusList = temp.caByStatusList;
      this.ccptReportCLCH = temp.clientCallHistoryList;
      this.ccptReportCOCH = temp.consultantCallHistoryList;
      this.caStat = temp.dashboardCAStatistics;
      this.setCAByStatusBarData(this.caByStatusList);
      this.spinner(true);
    });
    forkJoin(this.getAllReportCC, this.getAllCAStatus).subscribe(listofrecords => {
      this.ccptReportCC = listofrecords[0] as any;
      this.caStatusList = listofrecords[1] as any;
      this.setActiveCPBarData();
      this.setCAByStatusBarData(this.caByStatusList);
    });
    this.top5ById.properties = [];
  }
  public rpGetAllByDays() {
    const numberOfDays = this.rpChoosenDays;
    this.http.get(this.urlConstants.ReportingGetClosures + numberOfDays).subscribe(resp => {
      this.ccptReportCC = resp;
    });
  }
  public cochGetAllByDays() {
    const numberOfDays = this.cochChoosenDays;
    this.http.get(this.urlConstants.CoCHGetCountByRecruiter + numberOfDays).subscribe(resp => {
      this.ccptReportCOCH = resp as any;
    });
  }
  public clchGetAllByDays() {
    this.spinner(false);
    const numberOfDays = this.clchChoosenDays;
    this.http.get(this.urlConstants.CCHGetCountByRecruiter + numberOfDays).subscribe(resp => {
      this.ccptReportCLCH = resp as any;
      this.spinner(true);
    });
  }
  private spinner(isSpinner: boolean) {
    this.listReturned = isSpinner;
  }
  getAllActiveCAById(recrd: number) {
    this.spinner(false);
    this.activeCAById = [];
    this.http.get(this.urlConstants.ReportingGetAllActiveCAById + recrd).subscribe(resp => {
      this.activeCAById = resp as any;
      this.spinner(true);
    });
  }
  getAllCoCHByID(recrd: number, days: number) {
    this.spinner(false);
    this.cochByIdList = [];
    this.http.get(this.urlConstants.CoCHGetByRecruiterId + recrd + '&days=' + days).subscribe(resp => {
      this.cochByIdList = resp as any;
      this.spinner(true);
    });
  }
  getAllClCHByID(recrd: number, days: number) {
    this.spinner(false);
    this.clchByIdList = [];
    this.http.get(this.urlConstants.CCHGetByRecruiterId + recrd + '&days=' + days).subscribe(resp => {
      this.clchByIdList = resp as any;
      this.spinner(true);
    });
  }
  public getTop5ById(recrd) {
    this.spinner(false);
    this.http.get(this.urlConstants.CPGetById + recrd).subscribe(resp => {
      this.top5ById = resp as any;
      this.spinner(true);
    });
  }
  /**
   * @param
   * 1) content consists the modal instance
   * 2) Selected contains the code of selected row
   */
  open(content, selected: number, type) {
    if (selected) {
      this.selectedRecrd = selected;
    }
    this.modalRef = this.modalService.open(content, { size: 'lg', backdrop: 'static' });
    this.modalRef.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    if (type == 'activeClientApplication') {
      this.getAllActiveCAById(this.selectedRecrd);
    }
    if (type == 'ConsultantCallHistory') {
      this.getAllCoCHByID(this.selectedRecrd, this.cochChoosenDays);
    }
    if (type == 'ClientCallHistory') {
      this.getAllClCHByID(this.selectedRecrd, this.clchChoosenDays);
    }
    if (type == 'latestCPTop5') {
      this.getTop5ById(this.selectedRecrd);
    }
  }
  close() {
    this.modalRef.close();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  /**
   * Looping and assigning the count to display on bar UI
   * Store cpId and pass when clicked on the bar
   */
  private setActiveCPBarData() {
    this.activeCA.forEach(ca => {
      this.barChartLabels.push(ca.generatedCode);
      this.barChartActiveCAData[0].data.push('' + ca.count);
      this.barChartActiveCAData[0].cpIds.push('' + ca.cpId);
    });
    this.chartHeight = 55 * this.activeCA.length;
  }

  /**
   * data list of client applications by status
   */
  private setCAByStatusBarData(data: any[]) {
    let CAStatusOder: any = [];
    this.caStatusList.list.filter(csl => {
      for (let i = 1; i <= this.caStatusList.list.length; i++) {
        if (csl.ordr == i) {
          CAStatusOder[i - 1] = csl.description;
        }
      }
    });

    let uniqueClientName = data.map(item => item.clientName).filter((value, index, self) => self.indexOf(value) === index);
    this.stackChartHeight = uniqueClientName.length * 60;
    let uniqueStatus: any = [];
    let tempUniqueStatus = data.map(item => item.statusCode).filter((value, index, self) => self.indexOf(value) === index);
    CAStatusOder.forEach(cp => {
      tempUniqueStatus.forEach(tus => {
        if (cp === tus) {
          uniqueStatus.push(tus);
        }
      });
    });
    /**
                { data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80], label: 'Series A', stack: 'a' },
                { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80], label: 'Series B', stack: 'a' },
                { data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80], label: 'Series Bd', stack: 'a' }
             */
    uniqueStatus.forEach(us => {
      let temp = { data: [], label: '', stack: 'a' };
      uniqueClientName.forEach(ucn => {
        let unique: any = data.filter(dt => dt.clientName == ucn && dt.statusCode == us);
        temp.data.push(unique[0].count);
      });
      this.barChartCAByStautsLabels = uniqueClientName;
      this.barChartCAByStatusData.push(temp);
    });

    for (let i = 0; i < this.barChartCAByStatusData.length; i++) {
      this.barChartCAByStatusData[i].label = uniqueStatus[i];
    }
  }
  /**
   * @param event eventdata
   * Click on bar chart and get the id of respective bar
   */
  public chartClicked(event): void {
    const index = event.active[0]._index;
    this.open(this.contentACA, this.barChartActiveCAData[0].cpIds[index], 'activeClientApplication');
  }
  public updateCAStatus(ca) {
    this.http.update({}, this.urlConstants.CAStatusUpdate + ca.id + '&status=' + ca.status).subscribe(resp => {
      this.updateBarChart();
      this.updateIndex = ca.id;
      setTimeout(() => {
        this.updateIndex = 0;
        this.reload();
      }, 1000);
    });
  }
  private reload() {
    this.getCAStatUPdate.subscribe(resp => {
      this.caStat = resp as any;
    });
  }
  public updateBarChart() {
    let temp1 = this.http.get(this.urlConstants.ReportingGetAllCAByStatus).subscribe(resp => {
      this.caByStatusList = resp as any;
      this.barChartCAByStatusData = [];
      this.setCAByStatusBarData(this.caByStatusList);
    });
  }
}
