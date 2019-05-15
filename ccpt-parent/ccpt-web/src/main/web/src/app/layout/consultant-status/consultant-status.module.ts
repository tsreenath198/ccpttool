import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { ConsultantStatusRoutingModule } from './consultant-status-routing.module';
import { ConsultantStatusComponent } from './consultant-status.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, ConsultantStatusRoutingModule,FormsModule,NgbModule, PageHeaderModule,SharedPipesModule],
    declarations: [ConsultantStatusComponent], 
    providers: [NgbActiveModal]
})
export class ConsultantStatusModule {}
