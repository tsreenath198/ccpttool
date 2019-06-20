import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultantStatusComponent } from './consultant-status.component';

const routes: Routes = [
    {
        path: '',
        component: ConsultantStatusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsultantStatusRoutingModule {}
