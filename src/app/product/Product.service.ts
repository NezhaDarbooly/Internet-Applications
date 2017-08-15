import { Injectable } from '@angular/core';
import { Product } from './Product'

@Injectable()
export class ProductService {
     
 products: Product[] = [];
 wantedProduct:Product;
 found:boolean=false;
 
  constructor(
      
  ) {
      

    this.products.push(
     new Product('Baby Formula',2000,3000),
     new Product('chips',2000,200),
     new Product('drinks',2000,200),
     new Product('Pepsi',4000,370),
     new Product('cheese',300,500),
     new Product('ice cream',1200,100),
     new Product('cake',200,1000),
     new Product('sugar',3,650),
     new Product('rice',100,700),
     new Product('pen',500,70),
      new Product('detergent',500,70),
     new Product('marker',300,200),
     new Product('notebook',1300,240),
      new Product('Flash Light',100,300),
      new Product('Lighter',150,100),
       new Product('Toys',50,1500),
    );
    
   }

@Injectable()
  getProducts() {
    
    return this.products;
  }
@Injectable()
public getProductItem(name:string)
{
    
this.products.forEach(element => {
if (element.name===name)
    {  this.found=true;
       this.wantedProduct=element;
       element.quantity=element.quantity-1;
       if(element.quantity===0)
    {
        this.products.splice(this.products.indexOf(element),1);
    }
     
    }


});
if (this.found===true)
    {
        return this.wantedProduct;
    }
   
}


}
