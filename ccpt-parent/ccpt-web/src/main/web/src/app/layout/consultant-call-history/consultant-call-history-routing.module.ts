import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultantCallHistoryComponent } from "./consultant-call-history.component";

const routes: Routes = [
  {
    path: "",
    component: ConsultantCallHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultantCallHistoryRoutingModule {}
