import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { ClientCallHistoryRoutingModule } from './client-call-history-routing.module';
import { ClientCallHistoryComponent } from './client-call-history.component';
import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';

@NgModule({
    imports: [CommonModule, ClientCallHistoryRoutingModule,FormsModule, PageHeaderModule,SharedPipesModule,ActionListModule],
    declarations: [ClientCallHistoryComponent]
})
export class ClientCallHistoryModule {}
