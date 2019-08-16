import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class authServices implements CanActivate{
    isAuth = false;
    
    constructor(private route : Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> |Promise<boolean>|boolean{
        if(this.isAuth){
            return true
        }
    }

    logIn(){

        return new Promise((response, error)=>{
            this.isAuth = true;
            response(true)
        }) 
    }
    logOut(){
        this.isAuth = false;
    }

}