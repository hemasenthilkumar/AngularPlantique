import { Component, OnInit } from '@angular/core';
import { PlantiqueService } from '../services/plantique.service';
import { Connections } from '../shared/connections';
import { Connection } from '@angular/http';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
 friend:any;
 dataSource;
 displayedColumns: string[] = ['username', 'status'];
 conn:Connections[];
con:Connections;
  constructor(private service:PlantiqueService) { }

  ngOnInit() 
  {
    this.load_friends();
    this.conn=new Array();
  }

  load_friends()
  {
      this.service.getFriends("hema").subscribe(
        response=>{
          this.friend=JSON.parse(response.text());
          console.log(this.friend.arthi);
          this.setValue();
        
        }
      );
  }

  setValue()
  {
        
       for(let f in this.friend)
       {
        this.con=new Connections();
         this.con.username=f;
         this.con.status=this.friend[f];
        this.conn.push(this.con);
       }
       console.log(this.conn);
       this.dataSource = new MatTableDataSource(this.conn);
  }



}
