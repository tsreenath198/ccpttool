import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientApplicationComponent } from './client-application.component';

const routes: Routes = [
    {
        path: '',
        component: ClientApplicationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientApplicationRoutingModule {}
