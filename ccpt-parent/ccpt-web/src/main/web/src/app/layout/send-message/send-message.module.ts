import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SendMessageRoutingModule } from './send-message-routing.module';
import { SendMessageComponent } from './send-message.component';

@NgModule({
    imports: [NgbModule,CommonModule, SendMessageRoutingModule, FormsModule, PageHeaderModule, SharedPipesModule, ActionListModule],
    declarations: [SendMessageComponent]
})
export class SendMessageModule {}
