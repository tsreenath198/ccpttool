import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [CommonModule,
        ClientRoutingModule,
        FormsModule,
        NgxPaginationModule,
        PageHeaderModule,
        SharedPipesModule,
        NgbModule,
        FileUploadModule,
        ActionListModule,
        AngularEditorModule
    ],

    declarations: [ClientComponent],
    providers: [NgbActiveModal]
})
export class ClientModule { }
