import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {EventsRoutingModule} from './events-routing.module';
import {EventsComponent} from './events/events.component';

@NgModule({
    imports: [
        CommonModule,
        EventsRoutingModule,
        SharedModule
    ],
    declarations: [
        EventsComponent
    ]
})
export class EventsModule {
}
