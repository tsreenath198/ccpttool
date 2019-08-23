import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PaymentsComponent } from './payments.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [NgbModule,NgxPaginationModule, CommonModule, PaymentsRoutingModule, FormsModule, PageHeaderModule, SharedPipesModule, AngularEditorModule, ActionListModule],
    declarations: [PaymentsComponent]
})
export class PaymentsModule { }
