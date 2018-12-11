import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedService} from './services/shared.service';
import {TranslateService} from './services/translate.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {DesignService} from './services/design.service';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule
    ],
    providers: [],
    declarations: [
        PageNotFoundComponent,
        TopMenuComponent
    ],
    exports: [
        PageNotFoundComponent,
        TopMenuComponent
    ]
})
export class CoreModule {
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [
                TranslateService,
                SharedService,
                DesignService
            ]
        };
    }
}
