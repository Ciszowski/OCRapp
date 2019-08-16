import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Router } from '@angular/router';
import { authServices } from '../services/auth.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isConnected : boolean;
  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              private authService : authServices) {}

  onLogIn(){
    this.authService.logIn().then(()=>{
        this.isConnected = this.authService.isAuth
        this.router.navigate(['books'])
      })
  }
  onLogOut(){
    this.authService.logOut()
    this.isConnected = this.authService.isAuth
    this.router.navigate(['acceuil']) 
  }
}
