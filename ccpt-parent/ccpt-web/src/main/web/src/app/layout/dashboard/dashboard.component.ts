import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http.service';
import { ToastrCustomService } from 'src/app/shared/services/toastr.service';
import { URLConstants } from '../components/constants/url-constants';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    public noOfDays: Array<any> = ["All", "0", "7", "30", "365"];
    public ccptReportData: any = { "consultantCallHistoryList": [], "clientCallHistoryList": [] };
    public ccptClosureCount:any={};
    private urlConstants = new URLConstants();
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

    ngOnInit() { this.init() }

    public init() {
        this.http.get(this.urlConstants.ReportingGetAll).subscribe(resp => {
            this.ccptReportData = resp;
        })
        this.http.get("report/getClosedCountOfAllRecruitersFromLastGivenDays?days=7").subscribe(resp => {
            this.ccptClosureCount=resp;
            console.log(this.ccptClosureCount);
        })
    }
    public getAllByDays(numberOfDays: any) {
        this.ccptReportData = { "consultantCallHistoryList": [], "clientCallHistoryList": [] };
        if (numberOfDays == "All") {
            this.init();
        }
        else {
            this.http.get(this.urlConstants.ReportingGetAllLastGivenDays + numberOfDays).subscribe(resp => {
                this.ccptReportData = resp;
            })
            this.http.get(this.urlConstants.ReportingGetClosures + numberOfDays).subscribe(resp => {
                this.ccptClosureCount=resp;
                console.log(this.ccptClosureCount);
            })
        }
    }
    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
