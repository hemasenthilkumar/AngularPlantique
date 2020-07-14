import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,public dialog:MatDialog) { }

  ngOnInit() 
  {
  }
  login()
  {
      this.route.navigate(['login']);
  }
  signup()
  {
    this.route.navigate(['signup']);
  }

}
