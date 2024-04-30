import { Component } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrl: './liste-users.component.css'
})
export class ListeUsersComponent {
  constructor(private UserService:UserService){}

}
