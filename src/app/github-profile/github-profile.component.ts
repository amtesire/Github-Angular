import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../profile-service/profile.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  providers:[ProfileService],
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
 
 
 public username='amtesire';
 public  getProfileInfo:string;
 user:User;

//  }



  constructor(public userRequest:ProfileService,public repoRequest:ProfileService) { }

  ngOnInit() {
  
  
  }

}
