import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBankComponent } from './search-bank.component';

const routes: Routes = [
    {
        path: '',
        component: SearchBankComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchBankRoutingModule {}
