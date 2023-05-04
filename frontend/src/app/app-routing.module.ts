import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserContainerComponent} from './components/user-components/user-container/user-container.component';
import {EventContainerComponent} from './components/event-components/event-container/event-container.component';
import {ApplicationContainerComponent} from './components/application-components/application-container/application-container.component';
import {RegisterFormComponent} from "./components/forms/register-form/register-form.component";
import {EventFormComponent} from "./components/forms/event-form/event-form.component";
import {LoginFormComponent} from "./components/forms/login-form/login-form.component";
import {EventDetailsComponent} from "./components/event-components/event-details/event-details.component";
import {LandingPageComponent} from "./components/core/landing-page/landing-page.component";
import {AuthGuardService} from "./auth/auth-guard.service";

export const PathMap = {
    usersPath: 'users',
    eventsPath: 'events',
    applicationsPath: 'applications',
    newEventPath: 'newevent',
    //newApplicationPath: 'newapplication',
    registerPath: 'register',
    loginPath: 'login',
    basePath: '',
};

const routes: Routes = [
    {path: PathMap.usersPath, component: UserContainerComponent, canActivate: [AuthGuardService]},
    {path: PathMap.applicationsPath, component: ApplicationContainerComponent},
    {path: PathMap.registerPath, component: RegisterFormComponent},
    {path: PathMap.eventsPath, component: EventContainerComponent},
    {path: PathMap.eventsPath + '/' + ':id', component: EventDetailsComponent},
    {path: PathMap.newEventPath, component: EventFormComponent},
    {path: PathMap.basePath, component: LandingPageComponent},
    {path: PathMap.loginPath, component: LoginFormComponent},
    {path: '**', redirectTo: PathMap.basePath}

    //{path: PathMap.newApplicationPath, component: EventcontainerComponent}, //Rossz komponens
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
