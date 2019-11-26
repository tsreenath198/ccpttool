import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import {
  PageHeaderModule,
  SharedPipesModule,
  ActionListModule
} from "../../shared";
import { IndystryTypeRoutingModule } from "./industry-type-routing.module";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { IndustryTypeComponent } from "./industry-type.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    IndystryTypeRoutingModule,
    FormsModule,
    NgbModule,
    PageHeaderModule,
    SharedPipesModule,
    AngularEditorModule,
    ActionListModule
  ],
  declarations: [IndustryTypeComponent]
})
export class IndustryTypeModule {}
