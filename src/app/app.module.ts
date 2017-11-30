import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {CartComponent} from  '../app/Component/Cart/cart.component';
import {CheckoutComponent} from  '../app/Component/checkout/checkout.component';
import {HomeComponent} from  '../app/Component/home/home.component';

const rout : Routes=[
{path:'cart',component:CartComponent },
{path:'home',component:HomeComponent},
{path:'checkout',component:CheckoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  CartComponent,
  CheckoutComponent,
  HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
