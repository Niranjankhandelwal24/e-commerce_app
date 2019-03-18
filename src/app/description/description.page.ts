import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartserviceService } from '../cartservice.service';
import { identifierModuleUrl, isNgTemplate, ConstantPool } from '@angular/compiler';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductPage } from '../product/product.page';
@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {
  constructor(public dservice:DataService,
    public cService:CartserviceService,
    private route: ActivatedRoute,
    private router: Router) { }
    item;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    let data = this.dservice.getdata().products;
    console.log(id,data)
     for(let i=0;data.length;i++ )
     {
       if(id==data[i]._id)
       {
         this.item =(data[i])
       }
     }
    
}
addProduct(product)
{
  let found = false;
  for(let i=0;i<this.cService.cartData.length;i++)
  {
    if(this.cService.cartData[i].name==product.name)
    {
      found = true;
      this.cService.cartData[i].quantity++;
    } 
     
   }
   if(!found){
    this.cService.cartData.push(product);
   }
  
}


}
