import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { HttpClientService } from "src/app/shared/services/http.service";
import { ToastrCustomService } from "src/app/shared/services/toastr.service";
import { URLConstants } from "../components/constants/url-constants";
import { routerTransition } from "../../router.animations";
import { forkJoin } from "rxjs";
import {
  NgbModal,
  ModalDismissReasons,
  NgbModalRef
} from "@ng-bootstrap/ng-bootstrap";
import { Keyvalue } from "../modals/action";
import { Router } from "@angular/router";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { Color } from "ng2-charts";
import { Properties } from "../components/constants/properties";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  //public noOfDays: any = { 'Day': 1, 'Week': 7, 'Month': 30, 'Year': 365 };
  public noOfDays: Array<Keyvalue> = [
    { key: "Day", value: 1 },
    { key: "Week", value: 7 },
    { key: "Month", value: 30 },
    { key: "Year", value: 365 }
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
  public cpEmptyPostings: Array<any> = [];
  private urlConstants = new URLConstants();
  public constantProperties = new Properties();
  public rpChoosenDays: any = 7;
  public cochChoosenDays: any = 7;
  public clchChoosenDays: any = 7;
  public listReturned: boolean = false;
  public chartHeight: any;
  public stackChartHeight: any;
  public caStat: any;
  public paymentTrack: any;
  public caStatusList: any;
  public isCollapsed = true;
  public updateIndex: number;
  public clientId: number;
  public consultantId: number;
  public today: string;
  public statusToChange: string;
  public selectedCAList: Array<any> = [];
  public showLeftTable: string = this.constantProperties.DASHBOARD_ITW;
  public showRightTable: string = this.constantProperties.DASHBOARD_PT;
  /** Template references */

  @ViewChild("contentACA")
  private contentACA: TemplateRef<any>;

  private selectedRecrd = 0;
  public closeResult = "";
  private modalRef: NgbModalRef;
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "15rem",
    minHeight: "5rem",
    translate: "no"
  };
  public getAllCAStatus = this.http.get(
    this.urlConstants.CASGetAll + "0&pageSize=100&sortBy=id"
  );
  public getCAStatUPdate = this.http.get(this.urlConstants.DashboardCAStat);
  public getCPEmptyPostings = this.http.get(this.urlConstants.CPEmptyPostings);
  // public getAllOpenCP = this.http.get(this.urlConstants.ReportingGetAllOpenCP);
  // public getAllActiveCA = this.http.get(this.urlConstants.ReportingGetAllActiveCA);
  // public getAllInterviewsToday = this.http.get(this.urlConstants.ReportingGetAllInterviewsToday);
  // public getAllDyingCP = this.http.get(this.urlConstants.ReportingDyingCp);
  public getAllCAByStatus = this.http.get(
    this.urlConstants.ReportingGetAllCAByStatus
  );
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
  public barChartType: string = "horizontalBar";
  public barChartLegend: boolean = false;
  public stackBarChartLegend: boolean = true;

  public barChartActiveCAData: any[] = [
    { data: [], label: "Active Client Applications", cpIds: [] }
  ];
  public barChartColors: Color[] = [{ backgroundColor: "#343a40" }];
  public stackbarChartColors: Color[] = [
    { backgroundColor: "#f88e90" },
    { backgroundColor: "#f88e90" },
    { backgroundColor: "#f88e90" },
    { backgroundColor: "#f88e90" },
    { backgroundColor: "#ffe29a" },
    { backgroundColor: "#ffe29a" },
    { backgroundColor: "#ffe29a" },
    { backgroundColor: "#ffe29a" },
    { backgroundColor: "#46bfbd" }
  ];
  public barChartCAByStatusData: any[] = [];

  constructor(
    private http: HttpClientService,
    private router: Router,
    private toastr: ToastrCustomService,
    private modalService: NgbModal
  ) {
    this.today = new Date().toISOString().split("T")[0]; //2019-12-05
  }

  ngOnInit() {
    /*Autheticate user with the token */
    if (!this.http.isAuthenticate()) {
      this.router.navigate(["/login"]);
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
      this.caStat = temp.dashboardCAStatistics;
      this.paymentTrack = temp.paymentStatistics;
      // this.setCAByStatusBarData(this.caByStatusList);
      this.spinner(true);
    });
    forkJoin(this.getAllCAStatus, this.getCPEmptyPostings).subscribe(
      listofrecords => {
        this.caStatusList = listofrecords[0] as any;
        this.cpEmptyPostings = listofrecords[1] as any;
        this.setActiveCPBarData();
      }
    );
    this.top5ById.properties = [];
  }

  public getGraphData() {
    if (this.caByStatusList.length == 0) {
      this.getAllCAByStatus.subscribe(resp => {
        this.caByStatusList = resp as any;
        this.setCAByStatusBarData(this.caByStatusList);
        this.selectRightTable(this.constantProperties.DASHBOARD_CAS);
      });
    } else if (this.caByStatusList.length != 0) {
      this.caByStatusList = [];
      this.selectRightTable(this.constantProperties.DASHBOARD_CAS);
    }
  }
  private spinner(isSpinner: boolean) {
    this.listReturned = isSpinner;
  }
  getAllActiveCAById(recrd: number) {
    this.spinner(false);
    this.activeCAById = [];
    this.http
      .get(this.urlConstants.ReportingGetAllActiveCAById + recrd)
      .subscribe(resp => {
        this.activeCAById = resp as any;
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
    this.modalRef = this.modalService.open(content, {
      size: "lg",
      backdrop: "static"
    });
    this.modalRef.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    if (type == "activeClientApplication") {
      this.getAllActiveCAById(this.selectedRecrd);
    }
    if (type == "latestCPTop5") {
      this.getTop5ById(this.selectedRecrd);
    }
  }
  close() {
    this.modalRef.close();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
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
      this.barChartActiveCAData[0].data.push("" + ca.count);
      this.barChartActiveCAData[0].cpIds.push("" + ca.cpId);
    });
    this.chartHeight = 55 * this.activeCA.length;
  }

  /**
   * data list of client applications by status
   */
  private setCAByStatusBarData(data: any[]) {
    this.barChartCAByStatusData = [];
    let CAStatusOder: any = [];
    this.caStatusList.list.filter(csl => {
      for (let i = 1; i <= this.caStatusList.list.length; i++) {
        if (csl.ordr == i) {
          CAStatusOder[i - 1] = csl.description;
        }
      }
    });

    let uniqueClientName = data
      .map(item => item.clientName)
      .filter((value, index, self) => self.indexOf(value) === index);
    this.stackChartHeight = uniqueClientName.length * 60;
    let uniqueStatus: any = [];
    let tempUniqueStatus = data
      .map(item => item.statusCode)
      .filter((value, index, self) => self.indexOf(value) === index);
    if (CAStatusOder.length) {
      CAStatusOder.forEach(cp => {
        tempUniqueStatus.forEach(tus => {
          if (cp === tus) {
            uniqueStatus.push(tus);
          }
        });
      });
    }
    if (uniqueStatus.length) {
      uniqueStatus.forEach(us => {
        let temp = { data: [], label: "", stack: "a" };
        uniqueClientName.forEach(ucn => {
          let unique: any = data.filter(
            dt => dt.clientName == ucn && dt.statusCode == us
          );
          temp.data.push(unique[0].count);
        });
        this.barChartCAByStautsLabels = uniqueClientName;
        this.barChartCAByStatusData.push(temp);
      });
    }

    if (this.barChartCAByStatusData.length) {
      for (let i = 0; i < this.barChartCAByStatusData.length; i++) {
        this.barChartCAByStatusData[i].label = uniqueStatus[i];
      }
    }
  }
  /**
   * @param event eventdata
   * Click on bar chart and get the id of respective bar
   */
  public chartClicked(event): void {
    const index = event.active[0]._index;
    this.open(
      this.contentACA,
      this.barChartActiveCAData[0].cpIds[index],
      "activeClientApplication"
    );
  }
  public updateCAStatus(clientApps, status, type) {
    let idsToUpdate: Array<any> = [];
    if (type == "table") {
      idsToUpdate.push(clientApps.id);
    }
    if (type == "popup") {
      clientApps.forEach(ca => {
        idsToUpdate.push(ca.id);
      });
    }
    this.http
      .update(idsToUpdate, this.urlConstants.CAStatusUpdate + status)
      .subscribe(resp => {
        idsToUpdate = [];
        if (type === "table") {
          this.updateIndex = clientApps.id;
          setTimeout(() => {
            this.updateIndex = 0;
            this.reload();
          }, 1000);
        }
        if (type === "popup") {
          this.reload();
          this.close();
          this.statusToChange = "";
          this.selectedCAList = [];
          this.toastr.success(
            "Status changed successfully",
            this.constantProperties.CA
          );
        }
      });
  }
  private reload() {
    this.getCAStatUPdate.subscribe(resp => {
      this.caStat = resp as any;
    });
  }
  // public updateBarChart() {
  //   let temp1 = this.http.get(this.urlConstants.ReportingGetAllCAByStatus).subscribe(resp => {
  //     this.caByStatusList = resp as any;
  //     this.barChartCAByStatusData = [];
  //     this.setCAByStatusBarData(this.caByStatusList);
  //   });
  // }
  public selectLeftTable(value: any) {
    if (this.showLeftTable != value) {
      this.showLeftTable = value;
    } else {
      this.showLeftTable = "";
    }
  }
  public selectRightTable(value: any) {
    if (this.showRightTable != value) {
      this.showRightTable = value;
    } else {
      this.showRightTable = "";
    }
  }
  public onSelectApplication(event, ca) {
    if (event.target.checked) {
      this.selectedCAList.push(ca);
    } else {
      this.selectedCAList.forEach(sca => {
        if (ca.id === sca.id)
          this.selectedCAList.splice(this.selectedCAList.indexOf(sca), 1);
      });
      /* for (let i = 0; i < this.selectedCAList.length; i++) {
        if (ca.id == this.selectedCAList[i].id) {
          this.selectedCAList.splice(i, 1);
        }
      }*/
    }
  }
  public convertTime24To12Format(time:string){
    let hours = parseInt(time.split(':')[0]);
    let minutes = parseInt(time.split(':')[1]) == 0 ? '00' : parseInt(time.split(':')[1]);
    if (hours > 12){
      return `${hours - 12}:${minutes}`
    }
    return time;
  }
}
