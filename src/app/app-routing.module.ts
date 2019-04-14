import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'main',
        loadChildren: './content/main/main.module#MainModule'
    },
    {
        path: 'calendar',
        loadChildren: './content/calendar/calendar.module#CalendarModule'
    },
    {
        path: 'events',
        loadChildren: './content/events/events.module#EventsModule'
    },
    {
        path: 'history',
        loadChildren: './content/history/history.module#HistoryModule'
    },
    {
        path: 'contact',
        loadChildren: './content/contact/contact.module#ContactModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin-events/admin-events.module#AdminEventsModule'
    },
    {
        path: '', redirectTo: 'main', pathMatch: 'full'
    },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,
            {enableTracing: false}
        )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
