import { Component, OnInit } from '@angular/core';
import { PlantiqueService } from '../services/plantique.service';
import { Posts } from '../shared/posts';
import { PostDetails } from '../shared/postdetails';

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.scss']
})
export class ViewpostsComponent implements OnInit {

  json:any;
  posts:Posts[];
 
  post:PostDetails;
  constructor(private service:PlantiqueService) { }

  ngOnInit() 
  {
     console.log("Posts initiated");
    this.posts=new Array();
    this.loadPosts();
  }

  loadPosts()
  {
      this.service.getPosts("hema").subscribe(
        response=>{
          this.json=JSON.parse(response.text());
          this.display_posts();
        }
      );
  }

  display_posts()
  {
    for(let j in this.json)
    {
        var POST=new Posts;
        POST.posts=new Array();
        for(let d of this.json[j])
        {
          var p=new PostDetails;
          p.date=d[1];
          p.text=d[0];
          POST.username=j;
          POST.posts.push(p);
        }
        this.posts.push(POST);

    }
  
  //   console.log(this.posts);
  //   for(let p of this.posts)
  //   {
  //     console.log(p.username);
  //     console.log(p.posts);
  // p.posts.forEach(element=>
  //   {
  //     console.log(element.date);
  //     console.log(element.text);
  //   })
  //   }
    
    // for(let result of this.json){
    //   console.log(result[0]);
    //    this.list.push(result);
    // }
    // console.log(this.list);

  }

  refresh()
  {
    this.ngOnInit();
  }

}
