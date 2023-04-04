import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {EventComponent} from './components/event/event.component';
import {UsercontainerComponent} from './components/usercontainer/usercontainer.component';
import {ApplicationComponent} from './components/application/application.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {UserComponent} from './components/user/user.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {EventcontainerComponent} from './components/eventcontainer/eventcontainer.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        EventComponent,
        UsercontainerComponent,
        ApplicationComponent,
        NavbarComponent,
        UserComponent,
        EventcontainerComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatGridListModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
