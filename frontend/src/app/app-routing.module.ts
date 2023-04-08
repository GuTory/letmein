import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UsercontainerComponent } from './components/usercontainer/usercontainer.component';
import { EventcontainerComponent } from './components/eventcontainer/eventcontainer.component';
import { ApplicationcontainerComponent } from './components/applicationcontainer/applicationcontainer.component';
import {UserFormComponent} from "./components/user-form/user-form.component";
import {EventFormComponent} from "./components/event-form/event-form.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";

export const PathMap = {
    usersPath: 'users',
    applicationsPath: 'applications',
    newEventPath: 'newevent',
    newApplicationPath: 'newapplication',
    registerPath: 'register',
    loginPath: 'login',
    basePath: '',
};

const routes: Routes = [
    {path: PathMap.usersPath, component: UsercontainerComponent},
    {path: PathMap.applicationsPath, component: ApplicationcontainerComponent},
    {path: PathMap.registerPath, component: UserFormComponent},
    {path: PathMap.newEventPath, component: EventFormComponent},
    //{path: PathMap.newApplicationPath, component: EventcontainerComponent}, //Rossz komponens
    {path: PathMap.basePath, component: EventcontainerComponent},
    {path: PathMap.loginPath, component: LoginFormComponent},
    {path: '**', redirectTo: PathMap.basePath}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
