import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateService} from '../core/services/translate.service';
import {DesignService} from '../core/services/design.service';
import {SharedService} from '../core/services/shared.service';
import {TranslatePipe} from './pipes/translate.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TranslatePipe
    ],
    exports: [
        TranslatePipe
    ],
    providers: [
    ]
})
export class SharedModule {
}
