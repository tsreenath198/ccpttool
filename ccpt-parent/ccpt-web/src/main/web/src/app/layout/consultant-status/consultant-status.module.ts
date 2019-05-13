import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { ConsultantStatusRoutingModule } from './consultant-status-routing.module';
import { ConsultantStatusComponent } from './consultant-status.component';

@NgModule({
    imports: [CommonModule, ConsultantStatusRoutingModule,FormsModule, PageHeaderModule,SharedPipesModule],
    declarations: [ConsultantStatusComponent]
})
export class ConsultantStatusModule {}
