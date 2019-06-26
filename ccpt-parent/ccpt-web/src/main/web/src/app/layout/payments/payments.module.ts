import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { PaymentsComponent } from './payments.component';
import { PaymentsRoutingModule } from './payments-routing.module';

@NgModule({
    imports: [CommonModule, PaymentsRoutingModule, FormsModule, PageHeaderModule, SharedPipesModule, AngularEditorModule, ActionListModule],
    declarations: [PaymentsComponent]
})
export class PaymentsModule { }
