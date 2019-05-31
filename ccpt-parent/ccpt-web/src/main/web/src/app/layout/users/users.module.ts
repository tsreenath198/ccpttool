import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { PageHeaderModule } from '../../shared';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

@NgModule({
    imports: [CommonModule, UsersRoutingModule, FormsModule, PageHeaderModule],
    declarations: [UsersComponent]
})
export class UsersModule {}
