import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel } from '../client-position/client-position.model';
import { forkJoin } from 'rxjs';
import { NgbModal, ModalDismissReasons, NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public noOfDays: any = {  'Day': 1, 'Week': 7, 'Month': 30, 'Year': 365, };
    public ccptReportCLCH: Array<any> = [];
    public ccptReportCOCH: Array<any> = [];
    public ccptReportCC: any = {};
    public ccptReportCPL: Array<any> = [];
    public openCP: Array<any> = [];
    public activeCA: Array<any> = [];
    public activeCAById: Array<any> = [];
    public interviewsToday: Array<any> = [];
    private urlConstants = new URLConstants();
    public rpChoosenDays: any = 1;
    public cochChoosenDays: any = 1;
    public clchChoosenDays: any = 1;

    private selectedRecrd = 0;
    public closeResult = '';
    private modalRef: NgbModalRef;


    public getAllReportCLCH = this.http.get(this.urlConstants.ReportingGetAllCLCH + this.clchChoosenDays);
    public getAllReportCOCH = this.http.get(this.urlConstants.ReportingGetAllCOCH + this.cochChoosenDays);
    public getAllReportCPL = this.http.get(this.urlConstants.ReportingGetAllTop5CP);
    public getAllReportCC = this.http.get(this.urlConstants.ReportingGetClosures + this.rpChoosenDays);
    public getAllOpenCP = this.http.get(this.urlConstants.ReportingGetAllOpenCP);
    public getAllActiveCA = this.http.get(this.urlConstants.ReportingGetAllActiveCA);
    public getAllInterviewsToday = this.http.get(this.urlConstants.ReportingGetAllInterviewsToday);
    constructor(private http: HttpClientService, private toastr: ToastrCustomService, private modalService: NgbModal) {
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
        this.init();
    }
    public init() {
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
        });
    }
    public rpGetAllByDays() {
        const numberOfDays = this.rpChoosenDays;
        this.http.get(this.urlConstants.ReportingGetClosures + numberOfDays).subscribe(resp => {
            this.ccptReportCC = resp;
        });
    }
    public cochGetAllByDays() {
        const numberOfDays = this.cochChoosenDays;
        this.http.get(this.urlConstants.ReportingGetAllCOCH  + numberOfDays).subscribe(resp => {
            this.ccptReportCOCH = resp as any;
        });
    }
    public clchGetAllByDays() {
        const numberOfDays = this.clchChoosenDays;
        this.http.get(this.urlConstants.ReportingGetAllCLCH  + numberOfDays).subscribe(resp => {
            this.ccptReportCLCH = resp as any;
        });
    }
    getAllActiveCAById(recrd: number) {
        this.activeCAById = [];
        this.http.get(this.urlConstants.ReportingGetAllActiveCAById + recrd).subscribe(resp => {
            this.activeCAById = resp as any;
        });
    }
    /**
     * @param
     * 1) content consists the modal instance
     * 2) Selected contains the code of selected row
     */
    open(content, selected: number) {
        if (selected) {
            this.selectedRecrd = selected;
        }
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        this.getAllActiveCAById(this.selectedRecrd);
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
