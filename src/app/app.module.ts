import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {CartComponent} from  '../app/Component/Cart/cart.component';
import {CheckoutComponent} from  '../app/Component/checkout/checkout.component';
import {HomeComponent} from  '../app/Component/home/home.component';
import { AllResturantsComponent } from './Component/all-resturants/all-resturants.component';
import { SingleResturantComponent } from './Component/single-resturant/single-resturant.component';

const rout : Routes=[
{path:'cart',component:CartComponent },
{path:'home',component:HomeComponent},
{path:'checkout',component:CheckoutComponent},
{path:'AllResturants',component:AllResturantsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  CartComponent,
  CheckoutComponent,
  HomeComponent,
  AllResturantsComponent,
  SingleResturantComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
