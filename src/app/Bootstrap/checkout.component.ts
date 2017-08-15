import { Component } from '@angular/core';
import { Product } from '../product/Product';
import {Bill } from '../Bill/Bill';
import { AppComponent }  from '../app.component';
@Component({
  selector: 'checkout',
  template:`<table>
  <tr *ngFor="let product of chosenProducts">
  <td>{{product.name}}</td>
  <td>getNofItems({{product.name}})</td>
  <td>{{product.price}}</td>
  </tr>
  </table>`
 
  
})
export class checkoutComponent  { 
 
  
}