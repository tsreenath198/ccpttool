import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule } from '../../shared';
import { ClientPositionRoutingModule } from './client-position-routing.module';
import { ClientPositionComponent } from './client-position.component';

@NgModule({
    imports: [CommonModule, ClientPositionRoutingModule,FormsModule, PageHeaderModule],
    declarations: [ClientPositionComponent]
})
export class ClientPositionModule {}
