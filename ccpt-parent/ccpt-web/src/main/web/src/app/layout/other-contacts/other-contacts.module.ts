import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { OtherContactsRoutingModule } from './other-contacts-routing.module';
import { OtherContactsComponent } from './other-contacts.component';

@NgModule({
    imports: [CommonModule, OtherContactsRoutingModule,FormsModule, PageHeaderModule,SharedPipesModule],
    declarations: [OtherContactsComponent]
})
export class OtherContactsModule {}
