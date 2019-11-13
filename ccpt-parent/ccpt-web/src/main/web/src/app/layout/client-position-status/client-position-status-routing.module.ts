import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientPositionStatusComponent } from "./client-position-status.component";

const routes: Routes = [
  {
    path: "",
    component: ClientPositionStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPositionStatusRoutingModule {}
