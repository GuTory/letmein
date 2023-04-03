import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserPageComponent} from "./components/user-page/user-page.component";
import {AppComponent} from "./components/app/app.component";

const routes: Routes = [
    {path: 'users', component: UserPageComponent},
    {path: '', component: AppComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
