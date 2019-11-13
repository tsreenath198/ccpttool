import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MessageTemplateComponent } from "./message-template.component";

const routes: Routes = [
  {
    path: "",
    component: MessageTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageTemplateRoutingModule {}
