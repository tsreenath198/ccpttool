import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { RecruiterComponent } from './recruiter.component';

@NgModule({
    imports: [CommonModule, RecruiterRoutingModule, FormsModule, PageHeaderModule, SharedPipesModule, ActionListModule],
    declarations: [RecruiterComponent]
})
export class RecruiterModule { }
