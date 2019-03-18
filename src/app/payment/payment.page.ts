import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
   
  url = "http://localhost:8081/myorder"

  constructor(public cService : CartserviceService , public http :HttpClient ) {
     
   }

  ngOnInit() {
  }

  myorder()
  { console.log(this.cService.cartData)
    this.http.post(this.url , {items:this.cService.cartData ,Totalprice:this.cService.totalPrice()} ).subscribe((data:any)=>{
    })
  }
}

