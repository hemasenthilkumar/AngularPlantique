import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CartComponent } from '../cart/cart.component';
import { OrdersComponent } from '../orders/orders.component';
@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCart()
  {
    this.dialog.open(CartComponent, {width: '600px', height: '550px'});
  }

  openOrders()
  {
    this.dialog.open(OrdersComponent, {width: '800px', height: '350px'});
  }

}
