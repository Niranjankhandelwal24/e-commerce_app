import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
public Data=[];
total =0;
  constructor(public cService:CartserviceService) { }

  ngOnInit() {
    this.Data=this.cService.cartData;
    console.log(this.Data)
    this.grandTotal();
  }
  DeleteProduct(product)
  {
    this.cService.deleteitem(product);
    this.grandTotal();
  }

  Addqty(item)
  {
     item.quantity=item.quantity+1
    console.log("gijerb");
    this.grandTotal();
  }


 Minusqty(item)
 {
   if(item.quantity>1)
   {
item.quantity=item.quantity-1
console.log("gijerb");
   }
  else
  {
    this.DeleteProduct(item);
  }

  // this.cService.totalPrice();
  this.grandTotal();
 }
  
grandTotal()
{
  this.total = this.cService.totalPrice();
  console.log(this.total)
}
}
