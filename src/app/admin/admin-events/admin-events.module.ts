import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {AdminEventsRoutingModule} from './admin-events-routing.module';
import {AdminEventsComponent} from './admin-events/admin-events.component';

@NgModule({
    imports: [
        CommonModule,
        AdminEventsRoutingModule,
        SharedModule
    ],
    declarations: [
        AdminEventsComponent
    ]
})
export class AdminEventsModule {
}
