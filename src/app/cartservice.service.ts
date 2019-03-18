import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor() { }
 cartData:any =[];
  

 deleteitem(product)
 {
   console.log(product);
   for(let i=0;i<this.cartData.length;i++)
   {
      if(this.cartData[i].name==product.name)
     {
        var index = this.cartData.indexOf(product);
      this.cartData.splice(index,1);     
     }  
    }
 }


 totalPrice()
 { let total = 0;
   for( let i=0;i<this.cartData.length;i++)
   {
    total+= this.cartData[i].quantity*this.cartData[i].price
   }
   return total;
   console.log(total)
 }
}