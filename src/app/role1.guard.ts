import { CanActivateFn } from '@angular/router';

export const role1Guard: CanActivateFn = (route, state) => {
  return true;
};
