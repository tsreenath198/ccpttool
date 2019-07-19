import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel } from '../client-position/client-position.model';
import { forkJoin } from 'rxjs';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Keyvalue } from '../modals/action';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

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
    constructor(private http: HttpClientService, private router: Router, private toastr: ToastrCustomService,
        private modalService: NgbModal) {
        // this.sliders.push(
        //     {
        //         imagePath: 'assets/images/slider1.jpg',
        //         label: 'First slide label',
        //         text:
        //             'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider2.jpg',
        //         label: 'Second slide label',
        //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider3.jpg',
        //         label: 'Third slide label',
        //         text:
        //             'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        //     }
        // );

        // this.alerts.push(
        //     {
        //         id: 1,
        //         type: 'success',
        //         message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //         Voluptates est animi quibusdam praesentium quam, et perspiciatis,
        //         consectetur velit culpa molestias dignissimos
        //         voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        //     },
        //     {
        //         id: 2,
        //         type: 'warning',
        //         message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //         Voluptates est animi quibusdam praesentium quam, et perspiciatis,
        //         consectetur velit culpa molestias dignissimos
        //         voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        //     }
        // );
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
            this.getAllInterviewsToday
        ).subscribe(listofrecords => {
            this.ccptReportCLCH = listofrecords[0] as any;
            this.ccptReportCOCH = listofrecords[1] as any;
            this.ccptReportCPL = listofrecords[2] as any;
            this.ccptReportCC = listofrecords[3] as any;
            this.openCP = listofrecords[4] as any;
            this.activeCA = listofrecords[5] as any;
            this.interviewsToday = listofrecords[6] as any;
            this.spinner(true);
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
}
