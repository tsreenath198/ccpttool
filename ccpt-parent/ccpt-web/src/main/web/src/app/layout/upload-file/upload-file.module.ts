import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  {FormsModule} from '@angular/forms';

import { PageHeaderModule } from '../../shared';
import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file.component';

@NgModule({
    imports: [CommonModule, UploadFileRoutingModule,FormsModule, PageHeaderModule],
    declarations: [UploadFileComponent]
})
export class UploadFileModule {}
