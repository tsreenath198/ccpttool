import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule } from '../../shared';
import { ClientApplicationComponent } from './client-application.component';
import { ClientApplicationRoutingModule } from './client-application-routing.module';

@NgModule({
    imports: [CommonModule, ClientApplicationRoutingModule,FormsModule, PageHeaderModule],
    declarations: [ClientApplicationComponent]
})
export class ClientApplicationModule {}
