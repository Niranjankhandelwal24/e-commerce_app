import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class DataService  {
  url = "http://localhost:8081/getproduct"
  url1 = "http://localhost:8081/getorder"
   listdata:any = {products:[]};
   Orderdata:any = {orders:[]};
  constructor( public http :HttpClient ) {
    this.http.get(this.url).subscribe((data:any)=>{
      console.log(data)
      this.listdata.products=data.products;
    })
    this.http.get(this.url1).subscribe((data:any)=>{
      console.log(data)
      this.Orderdata.orders=data;
    })
   }


getdata()
{
  return this.listdata
  //   "image":"../../assets/Apple-fruit-34914775-675-700.jpg",
  //   "name": 'APPLE',
  //   "price": 100,
  //   "type" : "FRUIT",
  //   "quantity":1,
  //   "description":'it is good for health'
  // }, {
  //   "image":"../../assets/Fresh-Fruit-Mango-HD-Wallpapers.jpg",
  //   "name": 'MANGO',
  //   "price":50,
  //   "type" : "FRUIT",
  //   "quantity":1,
  //   "description":'it is good for health'

  // }, {
  //   "image":"../../assets/th (1).jpg",
  //   "name": 'BANANA',
  //   "price": 12,
  //   "type" : "FRUIT",
  //   "quantity":1,
  //   "description":'it is good for health'

  // }, {
  //   "image":"../../assets/Grapes11.jpg",
  //   "name": 'GRAPES',
  //   "price": 56,
  //   "type" : "FRUIT",
  //   "quantity":1,
  //   "description":'it is good for health'

  // }, {
  //   "image":"../../assets/515369690-612x612.jpg",
  //   "name": 'ORANGE',
  //   "price": 30,
  //   "type" : "FRUIT",
  //   "quantity":1,
  //   "description":'it is good for health'

  //  }]
}

// ngOnInit()
// {

// this.http.get(this.url).subscribe((data:any)=>{
//   console.log(data)
//   this.listdata.products=data.products;
// })
// }
}
