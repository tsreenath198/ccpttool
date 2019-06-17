import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { ClientPositionRoutingModule } from './client-position-routing.module';
import { ClientPositionComponent } from './client-position.component';

@NgModule({
    // tslint:disable-next-line:max-line-length
    imports: [CommonModule, ClientPositionRoutingModule, FormsModule, PageHeaderModule, SharedPipesModule, ActionListModule, NgMultiSelectDropDownModule.forRoot()],
    declarations: [ClientPositionComponent]
})
export class ClientPositionModule { }
