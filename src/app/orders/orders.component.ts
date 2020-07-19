import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PlantiqueService } from '../services/plantique.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders;
  displayedColumns: string[] = ['Items', 'Amount paid', 'Order date'];
  dataSource;
  constructor(public dialogRef: MatDialogRef<OrdersComponent>,private service:PlantiqueService) { }

  ngOnInit() {
    this.showOrders();
  }

  showOrders()
  {
    this.service.getOrders("hema").subscribe(
        response=>{
          this.orders=JSON.parse(response.text());
          this.dataSource=this.orders;
        }
    );
  }
}
