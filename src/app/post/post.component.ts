import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { PlantiqueService } from '../services/plantique.service';
import { ViewpostsComponent } from '../viewposts/viewposts.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postForm:FormGroup;
  constructor(private service:PlantiqueService,private fb:FormBuilder) { }
  view:ViewpostsComponent
  ngOnInit() 
  {
      this.view =new ViewpostsComponent(this.service);
      this.createForm()
   
  }
  createForm()
{
  this.postForm=this.fb.group({
    post:['',Validators.required]
  });
}
  postfeed()
  {
    console.log("came here!");
    this.service.postFeed("hema",this.postForm.value["post"]).subscribe(
    response=>{
      this.view.ngOnInit();
    }
    );
  }

}
