import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Users } from '../models';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrl: './liste-users.component.css',
})
export class ListeUsersComponent implements OnInit {
  //providers: Providers[] = [];
  constructor(private UserService: UserService) {}
  users: Users[] = [];
  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.UserService.getUsers().subscribe(
      (data: Users[]) =>
         {
        console.log(data);
        this.users = data;
      },
      (error) => console.log(error)
    );
  }
}
