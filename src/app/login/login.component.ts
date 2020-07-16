import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlantiqueService} from '../services/plantique.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  errMsg:string;
  constructor(private route:Router,private fb:FormBuilder,private service:PlantiqueService) { 
    this.createForm();
  }

  ngOnInit() 
  {
  }
  createForm()
  {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }

  onSubmit()
  {
    this.service.login(this.loginForm.value["username"],this.loginForm.value["password"])
    .subscribe(response=>
      {
        console.log(response);
        this.route.navigate(['main']);
      },error=>
      {
        this.errMsg=error;
      });

 
    
  }

}
