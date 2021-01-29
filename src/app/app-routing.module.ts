import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from '../app/components/home/home.component'
import { UsersComponent } from '../app/components/users/users.component'
import { PostsComponent } from '../app/components/posts/posts.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
