import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  console.log('AuthGuard called');
  const user = localStorage.getItem('IS_LOGGED_IN');
  console.log('User loggedin ?', user);
  if (!user) {
    console.log("User is not logged in.");
    alert('User must login to access this page');
    window.location.href = "/login";
    return false;
  } else {
    console.log('User is loggedin');
    return true;
  }
  //return true;// true means allow to proceed, false means block
};
