import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPositionComponent } from './client-position.component';

const routes: Routes = [
    {
        path: '',
        component: ClientPositionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientPositionRoutingModule {}
