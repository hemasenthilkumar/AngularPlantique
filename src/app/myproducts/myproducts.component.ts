import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../shared/productDetails';
import { PlantiqueService } from '../services/plantique.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.scss']
})
export class MyproductsComponent implements OnInit {
  res:any
  products:ProductDetails[]=new Array();
  product:ProductDetails;
  constructor(private service:PlantiqueService) { }

  ngOnInit() 
  {
    this.showProducts();
  }

  showProducts()
  {
    this.service.getProducts("hema").subscribe(
      response=>
      {
        this.res=JSON.parse(response.text());
        this.loadProducts();
      }
    );
  }

  loadProducts()
  {
      for(let r of this.res)
      {
        this.product=new ProductDetails();
        this.product.username=r["username"];
        this.product.price=r["price"];
        this.product.plant_name=r["name"];
        this.product.product_id=r["id_"];
        this.product.category=r["cat"];
        this.products.push(this.product);
      }
      console.log(this.products);
  }


}
