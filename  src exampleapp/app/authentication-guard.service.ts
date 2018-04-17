import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';


@Injectable()
export class AuthenticationGuardService implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  	if (route.paramMap.get('id')==='1') {
  		return true;
  	}
  	else{
  		return false;
  	}
  }

}
