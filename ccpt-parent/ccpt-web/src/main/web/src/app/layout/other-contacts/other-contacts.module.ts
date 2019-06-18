import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { OtherContactsRoutingModule } from './other-contacts-routing.module';
import { OtherContactsComponent } from './other-contacts.component';

@NgModule({
    imports: [CommonModule, OtherContactsRoutingModule,FormsModule, PageHeaderModule,SharedPipesModule,ActionListModule],
    declarations: [OtherContactsComponent]
})
export class OtherContactsModule {}
