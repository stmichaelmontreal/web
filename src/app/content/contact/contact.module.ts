import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {AgmCoreModule} from '@agm/core';
import {ContactComponent} from './contact/contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        SharedModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD7koCXDs5qqT7PHZ1kLIsvYIqQMSrUnxY'
        }),
        AgmSnazzyInfoWindowModule
    ],
    declarations: [ContactComponent]
})
export class ContactModule {
}
