import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ConsultantCallHistoryRoutingModule } from './consultant-call-history-routing.module';
import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { ConsultantCallHistoryComponent } from './consultant-call-history.component';

@NgModule({
    imports: [CommonModule, ConsultantCallHistoryRoutingModule, FormsModule, PageHeaderModule, SharedPipesModule, ActionListModule],
    declarations: [ConsultantCallHistoryComponent]
})
export class ConsultantCallHistoryModule {}
