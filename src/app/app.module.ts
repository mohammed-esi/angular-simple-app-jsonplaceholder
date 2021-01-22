import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarHomeComponent,
    UsersComponent,
    NavbarUserComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
