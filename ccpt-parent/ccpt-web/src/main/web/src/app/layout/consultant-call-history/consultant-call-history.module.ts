import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { ConsultantCallHistoryRoutingModule } from './consultant-call-history-routing.module';
import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { ConsultantCallHistoryComponent } from './consultant-call-history.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [NgbModule,CommonModule,NgxPaginationModule,Ng2OrderModule, ConsultantCallHistoryRoutingModule, FormsModule, PageHeaderModule, SharedPipesModule, ActionListModule,NgbModule],
    declarations: [ConsultantCallHistoryComponent]
})
export class ConsultantCallHistoryModule {}
