import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UsercontainerComponent } from './components/usercontainer/usercontainer.component';
import { EventcontainerComponent } from './components/eventcontainer/eventcontainer.component';
import { ApplicationcontainerComponent } from './components/applicationcontainer/applicationcontainer.component';

export const PathMap = {
    usersPath: 'users',
    applicationsPath: 'applications',
    basePath: '',
    newEventPath: 'newevent'
};

const routes: Routes = [
    {path: PathMap.usersPath, component: UsercontainerComponent},
    {path: PathMap.applicationsPath, component: ApplicationcontainerComponent},
    {path: PathMap.basePath, component: EventcontainerComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
