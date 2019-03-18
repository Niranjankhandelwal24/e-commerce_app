import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  url = "http://localhost:8081/login";
  public Data: any = {};
  email_id;
  password;
  
  constructor(public http: HttpClient, public route: Router,public formBuilder:FormBuilder) { 
  
  }
  login() {
    this.Data.email_id = this.email_id;
    this.Data.password = this.password;
     console.log(this.Data)
    this.http.post(this.url, this.Data).subscribe((data: any) => {
      console.log(data)
      if(data.error){
        console.log("error")
      }else{
        
        this.route.navigate(['product'])
      }

    })

  }
  ngOnInit() {
  }

}
