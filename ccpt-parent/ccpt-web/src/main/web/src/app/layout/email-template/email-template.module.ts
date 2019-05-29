import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { EmailTemplateRoutingModule } from './email-template-routing.module';
import { EmailTemplateComponent } from './email-template.component';

@NgModule({
    imports: [CommonModule, EmailTemplateRoutingModule, FormsModule, PageHeaderModule, SharedPipesModule],
    declarations: [EmailTemplateComponent]
})
export class EmailTemplateModule {}
