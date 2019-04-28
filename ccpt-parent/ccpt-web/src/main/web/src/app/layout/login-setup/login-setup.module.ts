import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule } from '../../shared';
import { LoginSetupRoutingModule } from './login-setup-routing.module';
import { LoginSetupComponent } from './login-setup.component';

@NgModule({
    imports: [CommonModule, LoginSetupRoutingModule,FormsModule, PageHeaderModule],
    declarations: [LoginSetupComponent]
})
export class LoginSetupModule {}
