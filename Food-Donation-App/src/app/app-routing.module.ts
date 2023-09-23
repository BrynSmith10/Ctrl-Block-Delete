import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent} from "./post/post.component";
import {FeedComponent} from "./feed/feed.component";
import {SignInComponent} from "./sign-in/sign-in.component";

const routes: Routes = [
  { path: '', component: FeedComponent},
  { path: 'post', component: PostComponent },
  { path: 'sign-in', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
