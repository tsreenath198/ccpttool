import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { ClientApplicationComponent } from './client-application.component';
import { ClientApplicationRoutingModule } from './client-application-routing.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, ClientApplicationRoutingModule, FormsModule, PageHeaderModule, SharedPipesModule, NgbModule],
    declarations: [ClientApplicationComponent],
    providers: [NgbActiveModal]
})
export class ClientApplicationModule { }
