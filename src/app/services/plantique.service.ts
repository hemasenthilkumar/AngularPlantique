import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserDetails } from '../shared/userDetails';


@Injectable({
  providedIn: 'root'
})
export class PlantiqueService {
  private baseUrl="http://127.0.0.1:5000/";
  userdtls:UserDetails
  constructor(private http:Http) { }

  login(us,ps)
  {
      return this.http.get(this.baseUrl+"login?us="+us+"&ps="+ps);
  }

  register(user:UserDetails)
  {
    
    return this.http.get(this.baseUrl+"register?info="+JSON.stringify(user));
  }

  getPosts(us)
  {
    return this.http.get(this.baseUrl+"userhome?usname="+us);
  }

  getFriends(us)
  {
    return this.http.get(this.baseUrl+"friends?usname="+us);
  }

  getFriendRoles(us)
  {
    return this.http.get(this.baseUrl+"friend?usname="+us);
  }

  postFeed(us,post)
  {
    return this.http.get(this.baseUrl+"feeds?us="+us+"&usp="+post);
  }

  connect(us,folname,value)
  {
    return this.http.get(this.baseUrl+"follow?usname="+us+"&folname="+folname+"&value="+value);
  }

}
