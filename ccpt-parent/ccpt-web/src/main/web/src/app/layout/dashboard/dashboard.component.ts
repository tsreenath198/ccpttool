import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { routerTransition } from '../../router.animations';
import { ClientPositionModel } from '../client-position/client-position.model';
import { forkJoin } from 'rxjs';

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
    private urlConstants = new URLConstants();
    public rpChoosenDays: any = 1;
    public cochChoosenDays: any = 1;
    public clchChoosenDays: any = 1;
    public getAllReportCLCH = this.http.get(this.urlConstants.ReportingGetAllCLCH + this.clchChoosenDays);
    public getAllReportCOCH = this.http.get(this.urlConstants.ReportingGetAllCOCH + this.cochChoosenDays);
    public getAllReportCPL = this.http.get(this.urlConstants.ReportingGetAllTop5CP);
    public getAllReportCC = this.http.get(this.urlConstants.ReportingGetClosures + this.rpChoosenDays);
    public getAllOpenCP = this.http.get(this.urlConstants.ReportingGetAllOpenCP);
    constructor(private http: HttpClientService, private toastr: ToastrCustomService) {
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
        ).subscribe(listofrecords => {
            this.ccptReportCLCH = listofrecords[0] as any;
            this.ccptReportCOCH = listofrecords[1] as any;
            this.ccptReportCPL = listofrecords[2] as any;
            this.ccptReportCC = listofrecords[3] as any;
            this.openCP = listofrecords[4] as any
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
}
