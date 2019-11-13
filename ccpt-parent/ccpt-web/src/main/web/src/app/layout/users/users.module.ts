import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import {
  PageHeaderModule,
  SharedPipesModule,
  ActionListModule
} from "../../shared";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    UsersRoutingModule,
    FormsModule,
    PageHeaderModule,
    SharedPipesModule,
    ActionListModule,
    NgbModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule {}
