import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public name:string;
 public pass:string;
 public success:boolean=false;
 public userObj = new User();
  constructor(private s : UserauthService) { }

  ngOnInit() {
  }
  onSubmit(){

    this.s.authUser(this.userObj).subscribe((data)=>{console.log("Success",data)});//,error=>console.log("Error",error));
    this.s.getUsers().subscribe((data)=>{console.log("got it man get it",data)});
    console.log(this.userObj.pass+ "------ "+this.userObj.user_id + "  ----");
  }
}
