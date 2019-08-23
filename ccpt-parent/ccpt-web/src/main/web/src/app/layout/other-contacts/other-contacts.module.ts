import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { OtherContactsRoutingModule } from './other-contacts-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { OtherContactsComponent } from './other-contacts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [CommonModule,NgxPaginationModule, OtherContactsRoutingModule, FormsModule,NgbModule, PageHeaderModule, SharedPipesModule, AngularEditorModule, ActionListModule],
    declarations: [OtherContactsComponent]
})
export class OtherContactsModule { }