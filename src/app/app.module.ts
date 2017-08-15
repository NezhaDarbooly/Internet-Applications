import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { checkoutComponent } from "./Bootstrap/checkout.component";





@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,checkoutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
