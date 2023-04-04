import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { UsercontainerComponent } from './components/usercontainer/usercontainer.component';
import { EventcontainerComponent } from './components/eventcontainer/eventcontainer.component';

const routes: Routes = [
    {path: 'users', component: UsercontainerComponent},
    {path: '', component: EventcontainerComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
