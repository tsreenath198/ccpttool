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
    public noOfDays: Array<Keyvalue> = [{ key: 'Day', value: 1 }, { key: 'Week', value: 7 }, { key: 'Month', value: 30 }, { key: 'Year', value: 365 }];
    public ccptReportCLCH: Array<any> = [];
    public ccptReportCOCH: Array<any> = [];
    public ccptReportCC: any = {};
    public top5ById: any = {};
    public ccptReportCPL: Array<any> = [];
    public openCP: Array<any> = [];
    public dyingCP: Array<any> = [];
    public caByStatusList: Array<any> = [];
    public activeCA: Array<any> = [];
    public activeCAById: Array<any> = [];
    public cochByIdList: Array<any> = [];
    public clchByIdList: Array<any> = [];
    public interviewsToday: Array<any> = [];
    private urlConstants = new URLConstants();
    public rpChoosenDays: any = 7;
    public cochChoosenDays: any = 7;
    public clchChoosenDays: any = 7;
    public listReturned: boolean = false;
    public chartHeight: any;
    /** Template references */

    @ViewChild('contentACA')
    private contentACA: TemplateRef<any>

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
    public getAllReportCPL = this.http.get(this.urlConstants.ReportingGetAllTop5CP);
    public getAllReportCC = this.http.get(this.urlConstants.ReportingGetClosures + this.rpChoosenDays);
    public getAllOpenCP = this.http.get(this.urlConstants.ReportingGetAllOpenCP);
    public getAllActiveCA = this.http.get(this.urlConstants.ReportingGetAllActiveCA);
    public getAllInterviewsToday = this.http.get(this.urlConstants.ReportingGetAllInterviewsToday);
    public getAllDyingCP = this.http.get(this.urlConstants.ReportingDyingCp);
    public getAllCAByStatus = this.http.get(this.urlConstants.ReportingGetAllCAByStatus);
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scales: {
            xAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        steps: 2,
                        stepValue: 2,
                    }
                }
            ],
            yAxes: [
                {
                    barPercentage: 1,
                    ticks: {
                        callback: function (label, index, labels) {
                            if (/\-/.test(label)) {
                                return label.split(/\-/,2);
                            } else {
                                return label;
                            }
                        }
                    }
                }
            ]
        }
    };
    public barChartLabels: string[] = [
    ];
    public barChartCAByStautsLabels: string[] = [
    ];
    public barChartType: string = 'horizontalBar';
    public barChartLegend: boolean = false;

    public barChartActiveCAData: any[] = [
        { data: [], label: 'Active Client Applications', cpIds: [] }
    ];
    public barChartColors: Color[] = [
        { backgroundColor: '#343a40' },
    ]
    public barChartCAByStatusData: any[] = [];

    constructor(private http: HttpClientService, private router: Router, private toastr: ToastrCustomService,
        private modalService: NgbModal) {
    }

    ngOnInit() {
        /*Autheticate user with the token */
        if (!this.http.isAuthenticate()) {
            this.router.navigate(['/login']);
        }
        this.init();
    }
    public init() {
        this.spinner(false);
        forkJoin(
            this.getAllReportCLCH,
            this.getAllReportCOCH,
            this.getAllReportCPL,
            this.getAllReportCC,
            this.getAllOpenCP,
            this.getAllActiveCA,
            this.getAllInterviewsToday,
            this.getAllDyingCP,
            this.getAllCAByStatus
        ).subscribe(listofrecords => {
            this.ccptReportCLCH = listofrecords[0] as any;
            this.ccptReportCOCH = listofrecords[1] as any;
            this.ccptReportCPL = listofrecords[2] as any;
            this.ccptReportCC = listofrecords[3] as any;
            this.openCP = listofrecords[4] as any;
            this.activeCA = listofrecords[5] as any;
            this.interviewsToday = listofrecords[6] as any;
            this.dyingCP = listofrecords[7] as any;
            this.caByStatusList = listofrecords[8] as any;
            this.spinner(true);
            this.setActiveCPBarData();
            this.setCAByStatusBarData(this.caByStatusList);
        });
        this.top5ById.properties = []
    }
    public rpGetAllByDays() {
        this.spinner(false);
        const numberOfDays = this.rpChoosenDays;
        this.http.get(this.urlConstants.ReportingGetClosures + numberOfDays).subscribe(resp => {
            this.ccptReportCC = resp;
            this.spinner(true);
        });
    }
    public cochGetAllByDays() {
        this.spinner(false);
        const numberOfDays = this.cochChoosenDays;
        this.http.get(this.urlConstants.CoCHGetCountByRecruiter + numberOfDays).subscribe(resp => {
            this.ccptReportCOCH = resp as any;
            this.spinner(true);
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
        })
    }
    getAllClCHByID(recrd: number, days: number) {
        this.spinner(false);
        this.clchByIdList = [];
        this.http.get(this.urlConstants.CCHGetByRecruiterId + recrd + '&days=' + days).subscribe(resp => {
            this.clchByIdList = resp as any;
            this.spinner(true);
        })
    }
    public getTop5ById(recrd) {
        this.spinner(false);
        this.http.get(this.urlConstants.CPGetById + recrd).subscribe(resp => {
            this.top5ById = resp as any;
            this.spinner(true);
        })
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
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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
            this.getTop5ById(this.selectedRecrd)
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
            this.barChartActiveCAData[0].data.push("" + ca.count);
            this.barChartActiveCAData[0].cpIds.push("" + ca.cpId);
        })
        this.chartHeight = 35 * this.activeCA.length;
    }

    /**
     * data list of client applications by status
     */
    private setCAByStatusBarData(data: any[]) {
        let uniqueClientName = data.map(item => item.clientName)
            .filter((value, index, self) => self.indexOf(value) === index);
        let uniqueStatus = data.map(item => item.statusCode)
            .filter((value, index, self) => self.indexOf(value) === index);
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
            })
            this.barChartCAByStautsLabels=uniqueClientName;
            this.barChartCAByStatusData.push(temp);
        })

        for(let i=0;i<this.barChartCAByStatusData.length;i++){
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
}
