import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MessageHistoryRoutingModule } from './message-history-routing.module';
import { MessageHistoryComponent } from './message-history.component';

@NgModule({
    imports: [CommonModule,NgxPaginationModule, MessageHistoryRoutingModule, FormsModule,NgbModule, PageHeaderModule, SharedPipesModule, AngularEditorModule, ActionListModule],
    declarations: [MessageHistoryComponent]
})
export class MessageHistoryModule { }
