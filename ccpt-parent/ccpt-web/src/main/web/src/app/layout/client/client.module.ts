import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
    imports: [CommonModule,
        ClientRoutingModule,
        FormsModule,
        PageHeaderModule,
        SharedPipesModule,
        NgbModule,
        FileUploadModule
    ],

    declarations: [ClientComponent],
    providers: [NgbActiveModal]
})
export class ClientModule { }
