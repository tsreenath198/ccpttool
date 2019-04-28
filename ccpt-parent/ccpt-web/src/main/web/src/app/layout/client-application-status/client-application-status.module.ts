import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule } from '../../shared';
import { ClientApplicationStatusComponent } from './client-application-status.component';
import { ClientApplicationStatusRoutingModule } from './client-application-status-routing.module';

@NgModule({
    imports: [CommonModule, ClientApplicationStatusRoutingModule,FormsModule, PageHeaderModule],
    declarations: [ClientApplicationStatusComponent]
})
export class ClientApplicationStatusModule {}
