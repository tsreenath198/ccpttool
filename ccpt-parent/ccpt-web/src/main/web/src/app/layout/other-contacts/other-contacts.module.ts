import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { OtherContactsRoutingModule } from './other-contacts-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { OtherContactsComponent } from './other-contacts.component';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, OtherContactsRoutingModule, FormsModule, NgbDropdown, PageHeaderModule, SharedPipesModule, AngularEditorModule, ActionListModule],
    declarations: [OtherContactsComponent]
})
export class OtherContactsModule { }
