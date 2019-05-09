import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule } from '../../shared';
import { ConsultantRoutingModule } from './consultant-routing.module';
import { ConsultantComponent } from './consultant.component';
import { FilterPipe } from 'src/app/shared/pipes/filter.pipe';

@NgModule({
    imports: [CommonModule, ConsultantRoutingModule,FormsModule, PageHeaderModule],
    declarations: [ConsultantComponent,FilterPipe]
})
export class ConsultantModule {}
