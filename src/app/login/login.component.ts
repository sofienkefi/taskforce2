import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  username!: string;
  password!: string;
  invalidLogin = false;
  
  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
constructor(private router:Router,private loginservice: AuthenticationService){}
ngOnInit() {}
checKLogin(){
  this.loginservice.authenticate(this.username, this.password).subscribe(
    (data:any) => {
      this.router.navigate([''])
      this.invalidLogin = false
      console.log(data)
    },
    (error:any) => {
      this.invalidLogin = true
      console.log(error)
    }
  ); 
}
}
