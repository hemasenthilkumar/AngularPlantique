import { Component, OnInit } from '@angular/core';
import { PlantiqueService } from '../services/plantique.service';
import { Connections } from '../shared/connections';
import { Connection } from '@angular/http';
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { MatTableDataSource } from '@angular/material';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ConnectionRole } from '../shared/connectionRoles';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
 friend:any;
 dataSource;
 isloaded;
 conn:Connections[];
con:Connections;

conroles:ConnectionRole[];
crole:ConnectionRole;

  constructor(private service:PlantiqueService,private router:Router) { }

  ngOnInit() 
  {
    this.load_friends();
    this.conn=new Array();
    this.conroles=new Array();
  }

  load_friends()
  {
    this.service.getFriendRoles("hema").subscribe(
      response=>{
        this.friend=JSON.parse(response.text());
        this.setValue();
      }
    );
    
  }

  setValue()
  {
      for(let f of this.friend)
      {
        this.crole=new ConnectionRole();
        this.crole.username=f['username'];
        this.crole.role=f['role'];
        this.crole.status=f['status']==0?"Follow":"Unfollow";
        this.crole.value=f['status'];
        this.conroles.push(this.crole);
      }

      console.log(this.conroles);
  }

  // load_friends()
  // {
  //     this.service.getFriends("hema").subscribe(
  //       response=>{
  //         this.friend=JSON.parse(response.text());
  //         console.log(this.friend.arthi);
  //         this.setValue();
        
  //       }
  //     );
  // }

  // setValue()
  // {
  //      for(let f in this.friend)
  //      {
  //       this.con=new Connections();
  //        this.con.username=f;
  //        this.con.status=this.friend[f]==0?"Follow":"Unfollow";
  //        this.con.value=this.friend[f];
  //       this.conn.push(this.con);
  //      }
  //      console.log(this.conn);
  //      this.dataSource = new MatTableDataSource(this.conn);
  // }

  follow(folname,value)
  {
      this.service.connect("hema",folname,value).subscribe(
        response=>{
          this.ngOnInit()
        }
      );
   
  }



}
