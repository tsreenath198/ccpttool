import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
    @Input() heading1: string;
    @Input() icon1: string;
    @Input() heading2: string;
    @Input() icon2: string;
    constructor() { }

    ngOnInit() { }
}
