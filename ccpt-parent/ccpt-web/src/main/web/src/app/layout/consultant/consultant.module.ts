import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { ConsultantRoutingModule } from './consultant-routing.module';
import { ConsultantComponent } from './consultant.component';

@NgModule({
    imports: [CommonModule, ConsultantRoutingModule,FormsModule, PageHeaderModule,SharedPipesModule],
    declarations: [ConsultantComponent]
})
export class ConsultantModule {}
