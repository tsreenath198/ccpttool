import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientApplicationStatusComponent } from './client-application-status.component';

const routes: Routes = [
    {
        path: '',
        component: ClientApplicationStatusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientApplicationStatusRoutingModule {}
