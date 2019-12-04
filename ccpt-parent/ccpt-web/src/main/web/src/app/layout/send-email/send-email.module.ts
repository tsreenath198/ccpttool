import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import {
  PageHeaderModule,
  SharedPipesModule,
  ActionListModule
} from "../../shared";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SendEmailRoutingModule } from "./send-email-routing.module";
import { SendEmailComponent } from "./send-email.component";
import { AngularEditorModule } from "@kolkov/angular-editor";

@NgModule({
  imports: [
    NgbModule,
    AngularEditorModule,
    CommonModule,
    SendEmailRoutingModule,
    FormsModule,
    PageHeaderModule,
    SharedPipesModule,
    ActionListModule
  ],
  declarations: [SendEmailComponent]
})
export class SendEmailModule {}
