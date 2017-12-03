import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {CartComponent} from  '../app/Component/Cart/cart.component';
import {CheckoutComponent} from  '../app/Component/checkout/checkout.component';
import {HomeComponent} from  '../app/Component/home/home.component';
import { AllResturantsComponent } from './Component/all-resturants/all-resturants.component';
import { SingleResturantComponent } from './Component/single-resturant/single-resturant.component';
import { SingleWithCartComponent } from './Component/single-with-cart/single-with-cart.component';

const rout : Routes=[
{path:'cart',component:CartComponent },
{path:'home',component:HomeComponent},
{path:'checkout',component:CheckoutComponent},
{path:'AllResturants',component:AllResturantsComponent},
{path:'single-resturant',component:SingleResturantComponent},
{path:'single-with-cart',component:SingleWithCartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  CartComponent,
  CheckoutComponent,
  HomeComponent,
  AllResturantsComponent,
  SingleResturantComponent,
  SingleWithCartComponent
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rout),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
