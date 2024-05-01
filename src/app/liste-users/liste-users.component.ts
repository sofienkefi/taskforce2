import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrl: './liste-users.component.css'
})
export class ListeUsersComponent  implements OnInit{
  users : any;
  constructor(private UserService:UserService){}

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(
      data=>
        {
          console.log(data);
          this.users = data;
        },
      error =>console.log(error)
    );
  }

}
