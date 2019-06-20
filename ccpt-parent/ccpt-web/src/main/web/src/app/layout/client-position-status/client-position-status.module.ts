import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { ClientPositionStatusRoutingModule } from './client-position-status-routing.module';
import { ClientPositionStatusComponent } from './client-position-status.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        ClientPositionStatusRoutingModule,
        FormsModule,
        PageHeaderModule,
        NgbModule,
        SharedPipesModule,
        ActionListModule
    ],
    declarations: [ClientPositionStatusComponent],
    providers: [NgbActiveModal]
})
export class ClientPositionStatusModule {}
