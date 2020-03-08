import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { TweetComponent } from './tweet/tweet.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'tweet', component:TweetComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
