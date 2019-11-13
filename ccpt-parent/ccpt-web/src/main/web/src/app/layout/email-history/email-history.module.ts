import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import {
  PageHeaderModule,
  SharedPipesModule,
  ActionListModule
} from "../../shared";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { EmailHistoryRoutingModule } from "./email-history-routing.module";
import { EmailHistoryComponent } from "./email-history.component";

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    EmailHistoryRoutingModule,
    FormsModule,
    NgbModule,
    PageHeaderModule,
    SharedPipesModule,
    AngularEditorModule,
    ActionListModule
  ],
  declarations: [EmailHistoryComponent]
})
export class EmailHistoryModule {}
