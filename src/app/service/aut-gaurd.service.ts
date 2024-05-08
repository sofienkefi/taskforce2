import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AutGaurdService implements CanActivate {

  constructor(
    private router:Router,
     
    private authservice:AuthenticationService)  { }
    canActivate(route:ActivatedRouteSnapshot, stat:RouterStateSnapshot){
      if (this.authservice.isUserLoggedIn())
        return true;
      this.router.navigate(['login']);
      return false;
    }}
