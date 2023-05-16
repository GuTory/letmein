import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserContainerComponent} from './components/user-container/user-container.component';
import {EventContainerComponent} from './components/event-container/event-container.component';
import {ApplicationContainerComponent} from './components/application-container/application-container.component';
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {EventFormComponent} from "./components/event-form/event-form.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {EventDetailsComponent} from "./components/event-details/event-details.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {AuthGuardService} from "./auth/auth-guard.service";

/**
 * Paths that are used in the application.
 */
export const PathMap = {
    usersPath: 'users',
    eventsPath: 'events',
    applicationsPath: 'applications',
    newEventPath: 'newevent',
    registerPath: 'register',
    loginPath: 'login',
    basePath: '',
};

/**
 * Routes defined for the application.
 */
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
];

/**
 * The app routing module.
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
