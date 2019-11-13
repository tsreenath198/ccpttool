import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import {
  PageHeaderModule,
  SharedPipesModule,
  ActionListModule
} from "../../shared";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { FrequentQuestionsRoutingModule } from "./frequent-questions-routing.module";
import { FrequentQuestionsComponent } from "./frequent-questions.component";

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FrequentQuestionsRoutingModule,
    FormsModule,
    PageHeaderModule,
    SharedPipesModule,
    ActionListModule,
    NgbModule
  ],
  declarations: [FrequentQuestionsComponent]
})
export class FrequentQuestionsModule {}
