import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { SearchBankRoutingModule } from './search-bank-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SearchBankComponent } from './search-bank.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [CommonModule,NgxPaginationModule, SearchBankRoutingModule, FormsModule,NgbModule, PageHeaderModule, SharedPipesModule, AngularEditorModule, ActionListModule],
    declarations: [SearchBankComponent]
})
export class SearchBankModule { }
