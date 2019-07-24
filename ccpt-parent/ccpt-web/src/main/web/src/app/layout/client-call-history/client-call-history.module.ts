import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ClientCallHistoryRoutingModule } from './client-call-history-routing.module';
import { ClientCallHistoryComponent } from './client-call-history.component';
import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, ClientCallHistoryRoutingModule,NgbModule, FormsModule, PageHeaderModule, SharedPipesModule, ActionListModule],
    declarations: [ClientCallHistoryComponent]
})
export class ClientCallHistoryModule {}
