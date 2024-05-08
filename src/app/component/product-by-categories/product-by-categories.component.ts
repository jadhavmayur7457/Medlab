import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-product-by-categories',
  templateUrl: './product-by-categories.component.html',
  styleUrls: ['./product-by-categories.component.scss']
})
export class ProductByCategoriesComponent implements OnInit{
  topdealbycategories: any;
 
 constructor(private http:HttpService ){

 }
  ngOnInit(): void {
    this.getproductdetailbycategories();
  }
getproductdetailbycategories(){
this.http.GetDatafromserver('top-deals-by-category').subscribe({

  next:(response:any)=>{
if(response && response.length > 0){
  this.topdealbycategories=response;
}
  },
  error:(error:any)=>{

  },
  
})
}

}
