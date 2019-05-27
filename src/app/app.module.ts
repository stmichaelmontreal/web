import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import { RegistrationComponent } from './content/registration/registration/registration.component';

@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        CoreModule.forRoot(),
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

// {provide: APP_BASE_HREF, useValue: '/'},
// {provide: LocationStrategy, useClass: PathLocationStrategy},
