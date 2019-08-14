import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageHeaderModule, SharedPipesModule, ActionListModule } from '../../shared';
import { ClientApplicationComponent } from './client-application.component';
import { ClientApplicationRoutingModule } from './client-application-routing.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [CommonModule,TranslateModule, ClientApplicationRoutingModule,NgxPaginationModule , FormsModule, PageHeaderModule, SharedPipesModule, NgbModule, ActionListModule,AngularEditorModule,FileUploadModule,NgbModule],
    declarations: [ClientApplicationComponent],
    providers: [NgbActiveModal]
})
export class ClientApplicationModule { }
