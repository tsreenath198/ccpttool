import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'client-call-history', loadChildren: './client-call-history/client-call-history.module#ClientCallHistoryModule' },
            { path:'client-application', loadChildren:'./client-application/client-application.module#ClientApplicationModule'},
            { path:'client-application-status', loadChildren:'./client-application-status/client-application-status.module#ClientApplicationStatusModule'},
            { path:'client-position', loadChildren:'./client-position/client-position.module#ClientPositionModule'},
            { path:'client-position-status', loadChildren:'./client-position-status/client-position-status.module#ClientPositionStatusModule'},
            { path:'consultant', loadChildren:'./consultant/consultant.module#ConsultantModule'},
            { path: 'consultant-call-history', loadChildren: './consultant-call-history/consultant-call-history.module#ConsultantCallHistoryModule' },
            { path:'consultant-status', loadChildren:'./consultant-status/consultant-status.module#ConsultantStatusModule'},
            { path:'recruiter', loadChildren:'./recruiter/recruiter.module#RecruiterModule'},
            { path:'login-setup', loadChildren:'./login-setup/login-setup.module#LoginSetupModule'},
            { path:'client', loadChildren:'./client/client.module#ClientModule'},
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
