import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { MessageTemplateRoutingModule } from './message-template-routing.module';
import { MessageTemplateComponent } from './message-template.component';

@NgModule({
    imports: [CommonModule, MessageTemplateRoutingModule, FormsModule, PageHeaderModule, SharedPipesModule],
    declarations: [MessageTemplateComponent]
})
export class MessageTemplateModule {}
