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
            { path: 'client-application', loadChildren: './client-application/client-application.module#ClientApplicationModule'},
            // tslint:disable-next-line:max-line-length
            { path: 'client-application-status', loadChildren: './client-application-status/client-application-status.module#ClientApplicationStatusModule'},
            { path: 'client-position', loadChildren: './client-position/client-position.module#ClientPositionModule'},
            { path: 'client-position-status', loadChildren: './client-position-status/client-position-status.module#ClientPositionStatusModule'},
            { path: 'consultant', loadChildren: './consultant/consultant.module#ConsultantModule'},
            { path: 'consultant-call-history', loadChildren: './consultant-call-history/consultant-call-history.module#ConsultantCallHistoryModule' },
            { path: 'consultant-status', loadChildren: './consultant-status/consultant-status.module#ConsultantStatusModule'},
            { path: 'recruiter', loadChildren: './recruiter/recruiter.module#RecruiterModule'},
            { path: 'user', loadChildren: './users/users.module#UsersModule'},
            { path: 'search-bank', loadChildren: './search-bank/search-bank.module#SearchBankModule'},
            { path: 'other-contacts', loadChildren: './other-contacts/other-contacts.module#OtherContactsModule'},
            { path: 'client', loadChildren: './client/client.module#ClientModule'},
            { path: 'email-template', loadChildren: './email-template/email-template.module#EmailTemplateModule'},
            { path: 'message-template', loadChildren: './message-template/message-template.module#MessageTemplateModule'},
            { path: 'payments', loadChildren: './payments/payments.module#PaymentsModule'},
            { path: 'send-message', loadChildren: './send-message/send-message.module#SendMessageModule'},
            { path: 'faq', loadChildren: './frequent-questions/frequent-questions.module#FrequentQuestionsModule'},
            { path: 'email-history', loadChildren:'./email-history/email-history.module#EmailHistoryModule'},
            { path: 'message-history', loadChildren:'./message-history/message-history.module#MessageHistoryModule'},
            
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
