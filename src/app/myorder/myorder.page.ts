import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.page.html',
  styleUrls: ['./myorder.page.scss'],
})
export class MyorderPage implements OnInit {
  public Data = [];

  constructor(public dservice:DataService) { }

  ngOnInit() {
    this.Data = this.dservice.Orderdata;
    console.log(this.Data);
  }

}
