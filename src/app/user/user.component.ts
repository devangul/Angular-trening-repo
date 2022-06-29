import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../interfaces/interfaces.user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

Response: User | any;
str = '';
  constructor(private userService: UserService) { 

this.userService.TestUser().subscribe((data: User)=>{
this.Response = data;
})

  }

  ngOnInit(){
  }

}
