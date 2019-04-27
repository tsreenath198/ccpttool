import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCallHistoryComponent } from './client-call-history.component';

const routes: Routes = [
    {
        path: '',
        component: ClientCallHistoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientCallHistoryRoutingModule{}
