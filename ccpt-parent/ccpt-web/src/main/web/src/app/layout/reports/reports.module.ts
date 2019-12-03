import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NgbCarouselModule,
  NgbAlertModule,
  NgbModule
} from "@ng-bootstrap/ng-bootstrap";

import { StatModule, ActionListModule } from "../../shared";
import { FormsModule } from "@angular/forms";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { ChartsModule as Ng2Charts } from "ng2-charts";
import { ReportsComponent } from "./reports.component";
import { ReportsRoutingModule } from "./reports-routing.module";

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    ReportsRoutingModule,
    StatModule,
    FormsModule,
    AngularEditorModule,
    NgbModule,
    Ng2Charts,
    ActionListModule
  ],
  declarations: [
    ReportsComponent
  ]
})
export class ReportsModule {}
