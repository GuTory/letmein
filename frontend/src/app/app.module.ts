import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { EventComponent } from './components/event/event.component';
import { UserComponent } from './components/user/user.component';
import { ApplicationComponent } from './components/application/application.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    UserComponent,
    ApplicationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
