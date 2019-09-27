import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageHistoryComponent } from './message-history.component';

const routes: Routes = [
    {
        path: '',
        component: MessageHistoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MessageHistoryRoutingModule {}
