import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/posts/post-form/post-form.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { UserComponent } from './components/user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarHomeComponent,
    UsersComponent,
    NavbarUserComponent,
    FooterComponent,
    PostsComponent,
    PostFormComponent,
    LoadingPageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
