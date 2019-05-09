import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule } from '../../shared';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
    imports: [CommonModule, ClientRoutingModule,FormsModule, PageHeaderModule],
    declarations: [ClientComponent]
})
export class ClientModule {}
