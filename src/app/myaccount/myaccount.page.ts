import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {

  url = "http://localhost:8081/myaccount";
  public Data : any = {};
 username;
 mobileno;
 useraddress;
 email_id;
  constructor(public http: HttpClient, public route: Router,public formBuilder:FormBuilder) { }

  ngOnInit() {
  }

  postrequest()
  {
    this.Data.username = this.username;
    this.Data.email_id = this.email_id;
    this.Data.mobile_no = this.mobileno;
    this.Data.address = this.useraddress;

     console.log(this.Data)
    this.http.post(this.url, this.Data).subscribe((data: any) => {
      console.log(data)
    })
    this.route.navigate(['product'])
  }
}
