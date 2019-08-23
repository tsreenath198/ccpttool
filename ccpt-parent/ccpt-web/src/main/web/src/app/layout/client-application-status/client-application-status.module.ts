import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { ClientApplicationStatusComponent } from './client-application-status.component';
import { ClientApplicationStatusRoutingModule } from './client-application-status-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [CommonModule,
        ClientApplicationStatusRoutingModule,
        FormsModule,
         PageHeaderModule,
         NgbModule,
         SharedPipesModule,
         ActionListModule,
         NgxPaginationModule
        ],
    declarations: [ClientApplicationStatusComponent],
    providers: [NgbActiveModal]
})
export class ClientApplicationStatusModule { }
