import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { PlantiqueService } from '../services/plantique.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  total:number=0;
  displayedColumns: string[] = ['Plant Name', 'Price', 'Actions'];
  dataSource;
  constructor(public dialogRef: MatDialogRef<CartComponent>,private service:PlantiqueService) { }
  

  ngOnInit() 
  {
    this.showCart();
  }

  showCart()
  {
    this.service.getCart("hema").subscribe(
      response=>{
          this.items=JSON.parse(response.text());
          this.dataSource=this.items;
          console.log(this.items);
          this.addTotal();
      }
    );
  }

  addTotal()
  {
    for(let item of this.items)
    {
      this.total+=Number(item['price']);
      console.log(this.total);

    }
  }

  clearCart()
  {
    alert("Payment succesful");
    this.service.emptyCart("hema",this.total).subscribe(
      response=>{
        this.ngOnInit();
      }
    );
    
  }

}
