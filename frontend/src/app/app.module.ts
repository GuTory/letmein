import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EventComponent} from './components/event/event.component';
import {UserContainerComponent} from './components/user-container/user-container.component';
import {ApplicationComponent} from './components/application/application.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {UserComponent} from './components/user/user.component';
import {EventContainerComponent} from './components/event-container/event-container.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {ApplicationContainerComponent} from './components/application-container/application-container.component';
import {EventFormComponent} from './components/event-form/event-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {FormsModule} from "@angular/forms";
import {LoginFormComponent} from './components/login-form/login-form.component';
import {HeaderInterceptor} from './auth/header.interceptor';
import {EventDetailsComponent} from './components/event-details/event-details.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {NgOptimizedImage} from "@angular/common";

/**
 * The app module.
 */
@NgModule({
    declarations: [
        AppComponent,
        EventComponent,
        UserContainerComponent,
        ApplicationComponent,
        NavbarComponent,
        UserComponent,
        EventContainerComponent,
        FooterComponent,
        ApplicationContainerComponent,
        EventFormComponent,
        RegisterFormComponent,
        LoginFormComponent,
        EventDetailsComponent,
        LandingPageComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule,
        FormsModule,
        NgOptimizedImage
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
