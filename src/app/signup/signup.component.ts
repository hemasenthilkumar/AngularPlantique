import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDetails,UserType} from '../shared/userDetails';
import { PlantiqueService } from '../services/plantique.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  user:UserDetails;
  usertype=UserType;
  errMsg:string;
  constructor(private fb:FormBuilder,private service:PlantiqueService,public datepipe: DatePipe) { this.createForm();}
  ngOnInit() 
  {
  }
  createForm()
  {
    this.signupForm=this.fb.group({
        username:['',[Validators.required,Validators.minLength(5)]],
        password:['',[Validators.required]],
        confirmPassword:['',[Validators.required]],
        emailId:['',[Validators.required,Validators.pattern]],
        userType:['',[Validators.required]],
        birthDate:['',[Validators.required]]
    });
  }

  onSubmit()
  {
    this.signupForm.value["birthDate"] =this.datepipe.transform(this.signupForm.value["birthDate"], 'dd/MM/yyyy');
    var us=this.signupForm.value;
    this.user=us;
    this.service.register(this.user).subscribe(
      response =>{
        this.errMsg=response.text();
      console.log(response.text());
    });
  

    
  }


}
