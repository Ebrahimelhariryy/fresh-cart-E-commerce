import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router)
 if(typeof localStorage!=='undefined'){
  if(localStorage.getItem('usertoken')!=null){

    return true;

  }
  else{
    _Router.navigate(['/login'])
    return false;
  }
 }
 else{
  return false;
 }
};
