import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { authentificationService } from '../authentification/Services/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(private auth:authentificationService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.auth.isconnected()){
        this.router.navigateByUrl('/login')
        return false;
  }
  return true;
  }
  
}
