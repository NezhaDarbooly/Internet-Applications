import {Product} from '../product/Product'
import{AppComponent} from '../app.component'
export class Bill {
 
    
    
    constructor (public date: Date,
      public products:Product[],public numofItems:number[], public total:number) {
    }

 
}