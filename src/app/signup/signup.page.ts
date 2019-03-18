import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  url = "http://localhost:8081/signup"

  public Data: any = {};
  username;
  email_id;
  password;
  signupForm;
  name;
  constructor(public http: HttpClient, public route: Router,public formBuilder:FormBuilder) {
    this.name = new FormControl('Dayana', Validators.required)

  }
 



  signup() {
   
    this.Data.username = this.username;
    this.Data.email_id = this.email_id;
    this.Data.password = this.password;
     console.log(this.Data)
    this.http.post(this.url, this.Data).subscribe((data: any) => {
      console.log(data)
    })

    this.route.navigate(['product'])
  }

}
