# Guards

##### Create Guards
```ts
ng g guard auth
```
* Choose (*)canActivate [ Spacebar + enter to select  )

##### AuthGuard - Business Logic
* If user is not loggedin, show alert message 'Please login' and then redirect to login page.
* If user is loggedin, allow the user to access the component page
* If the guard returns true, it will **ALLOW** to access the page.
* If the guard returns false, it will **NOT ALLOW** to access the page.

```ts
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

```

##### Task : How to protect the private pages ?
* We will add canActivate 
```ts
{ path: 'products/add', component: ProductAddComponent, canActivate: [authGuard] },
```

