import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
//import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // public users:string;
  users:any;
  user:User;
  

  private username:string;
  private access_token='574ec926b89956273d2e4c55b572deba3462ac55';


  constructor(private http:HttpClient) {
    console.log("service is ready");
    this.username='amtesire';
    this.access_token='574ec926b89956273d2e4c55b572deba3462ac55';

   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" +
     this.access_token +"&access_token=" + this.access_token );
   }
  
   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=" +
    this.access_token +"/repos&access_token=" + this.access_token );
  }
  updateProfile(username:string){
    this.username=username;
    console.log(username);
  }
  
}    