import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public loginService: AuthenticationService) { }
}