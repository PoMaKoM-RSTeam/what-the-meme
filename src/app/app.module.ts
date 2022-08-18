import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NameFieldComponent } from './components/name-field/name-field.component';
import { RoomViewComponent } from './components/room-view/room-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    JoinPageComponent,
    LogoComponent,
    NavigationComponent,
    RoomViewComponent,
    NameFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
