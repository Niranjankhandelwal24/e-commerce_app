import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
public Data=[];
productFilter : any = {name:''};
  constructor(public dservice:DataService) {}

  ngOnInit() {
    this.Data=this.dservice.getdata();
    console.log(this.Data)
  }

}
