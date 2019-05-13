import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { ClientPositionStatusRoutingModule } from './client-position-status-routing.module';
import { ClientPositionStatusComponent } from './client-position-status.component';

@NgModule({
    imports: [CommonModule, ClientPositionStatusRoutingModule,FormsModule, PageHeaderModule,SharedPipesModule],
    declarations: [ClientPositionStatusComponent]
})
export class ClientPositionStatusModule {}
