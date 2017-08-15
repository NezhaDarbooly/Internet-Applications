import { Component } from '@angular/core';
import { Product } from './product/Product'
import {Bill } from './Bill/Bill'
import {ProductService} from './product/Product.service'
@Component({
  selector: 'my-app',
  templateUrl:'./Bootstrap/navbar.html',
   providers: [ProductService]
})
export class AppComponent  { 
  public products:Product[]=[]
   public cart:Product[]=[]
   public billProducts:Product[]=[]
   public nofItems:number[]=[]
   public bill:Bill;
     public total:number=0;
     public count:number=0;
      public checkedOut:boolean=false;
    
     
    
  
 
  constructor( private dataSerive: ProductService) { 
    this.products = dataSerive.getProducts();


   
  }
   public  getItem(name:string)
    {
   
     this.cart.push( this.dataSerive.getProductItem(name));
     
    }

      public  clearCart()
    {

     this.cart=[];
     this.billProducts=[];
     this.bill.products=[];
     this.bill.numofItems=[];
     this.bill.total=0;
    
    }
   public removeItem(name:string)
    {
     this.cart.forEach(element => {
       if(element.name===name)
        {
          this.cart.splice(this.cart.indexOf(element),1)
        }
       
     });

    }
 public  getNofItems(name:string)
    {
     this.count=0;
     this.cart.forEach(element => {
       if(element.name===name)
        {
          this.count=this.count+1;
        }
      
       
     });
   return this.count; }
    
    public makeBill()
    {  if (this.cart.length!==0)
     { this.checkedOut=true;
       this.getBillProducts().forEach(element => {
        this.nofItems.push(this.getNofItems(element.name))
      });
      this.bill=new Bill(new Date(),this.billProducts,this.nofItems,this.calculateTotal())
      //console.log(this.bill.date+"**"+this.bill.products.length+"**"+this.bill.numofItems+"**"+this.bill.total)
       this.cart=[];  
    }  
  
       }
    public  getBillProducts()
        {
             this.cart.forEach(element => {
                if(this.billProducts.indexOf(element)===-1)
                  { 
                    this.billProducts.push(element);
                  } 
             });
      return this.billProducts;
            }
          
 
 public   calculateTotal()
{ 

    this.cart.forEach(element => {
        this.total=this.total+element.price;
        
    });
    return this.total;
}
public getBillDate()
{
return this.bill.date.getDay()+"/"+this.bill.date.getMonth()+"/"+this.bill.date.getFullYear()+" "+this.bill.date.getHours()+":"+this.bill.date.getMinutes()+":"+this.bill.date.getSeconds();

}
public anotherBill()
{
this.bill=new Bill(new Date(),[],[],0);
this.billProducts=[];
this.count=0;
this.nofItems=[];
this.total=0;
this.checkedOut=false;
}
}
