import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HistoryComponent} from './history/history.component';
import {SharedModule} from '../../shared/shared.module';
import {HistoryRoutingModule} from './history-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HistoryRoutingModule,
        SharedModule
    ],
    declarations: [
        HistoryComponent
    ]
})
export class HistoryModule {
}
