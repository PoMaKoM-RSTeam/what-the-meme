import { NavigationService } from './components/navigation/navigation.service';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AvatarComponent } from './components/avatar/avatar.component';
import {MatIconModule} from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { DynamicChildLoaderDirective } from './directives/dynamic-child-loader.directive';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ModalPasswordComponent } from './components/modal-password/modal-password.component';
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    JoinPageComponent,
    LogoComponent,
    NavigationComponent,
    RoomViewComponent,
    NameFieldComponent,
    AvatarComponent,
    CreatePageComponent,
    ModalComponent,
    DynamicChildLoaderDirective,
    GamePageComponent,
    ModalPasswordComponent,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
