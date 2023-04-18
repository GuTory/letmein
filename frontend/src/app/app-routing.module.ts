import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsercontainerComponent} from './components/usercontainer/usercontainer.component';
import {EventcontainerComponent} from './components/eventcontainer/eventcontainer.component';
import {ApplicationcontainerComponent} from './components/applicationcontainer/applicationcontainer.component';
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {EventFormComponent} from "./components/event-form/event-form.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {EventDetailsComponent} from "./components/event-details/event-details.component";
import {LandingComponent} from "./components/landing/landing.component";
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
    {path: PathMap.usersPath, component: UsercontainerComponent, canActivate: [AuthGuardService]},
    {path: PathMap.applicationsPath, component: ApplicationcontainerComponent},
    {path: PathMap.registerPath, component: RegisterFormComponent},
    {path: PathMap.eventsPath, component: EventcontainerComponent},
    {path: PathMap.eventsPath + '/' + ':id', component: EventDetailsComponent},
    {path: PathMap.newEventPath, component: EventFormComponent},
    {path: PathMap.basePath, component: LandingComponent},
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
