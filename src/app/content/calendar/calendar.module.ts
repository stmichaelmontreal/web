import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {CalendarRoutingModule} from './calendar-routing.module';
import {CalendarComponent} from './calendar/calendar.component';

@NgModule({
    imports: [
        CommonModule,
        CalendarRoutingModule,
        SharedModule
    ],
    declarations: [CalendarComponent]
})
export class CalendarModule {
}
