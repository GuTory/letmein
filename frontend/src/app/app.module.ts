import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/core/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EventComponent} from './components/event-components/event/event.component';
import {UsercontainerComponent} from './components/user-components/usercontainer/usercontainer.component';
import {ApplicationComponent} from './components/application-components/application/application.component';
import {NavbarComponent} from './components/core/navbar/navbar.component';
import {UserComponent} from './components/user-components/user/user.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {EventcontainerComponent} from './components/event-components/eventcontainer/eventcontainer.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './components/core/footer/footer.component';
import {ApplicationcontainerComponent} from './components/application-components/applicationcontainer/applicationcontainer.component';
import {EventFormComponent} from './components/forms/event-form/event-form.component';
import {RegisterFormComponent} from './components/forms/register-form/register-form.component';
import {FormsModule} from "@angular/forms";
import {LoginFormComponent} from './components/forms/login-form/login-form.component';
import {HeaderInterceptor} from './auth/header.interceptor';
import {EventDetailsComponent} from './components/event-components/event-details/event-details.component';
import {LandingPageComponent} from './components/core/landing-page/landing-page.component';

@NgModule({
    declarations: [
        AppComponent,
        EventComponent,
        UsercontainerComponent,
        ApplicationComponent,
        NavbarComponent,
        UserComponent,
        EventcontainerComponent,
        FooterComponent,
        ApplicationcontainerComponent,
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
        MatCardModule,
        MatGridListModule,
        RouterModule,
        FormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
