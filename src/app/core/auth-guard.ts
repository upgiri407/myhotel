import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

// Route guard: blocks access to protected pages if user is not logged in.
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
 constructor(
  private authService: AuthService,
  private router: Router
) {}

// Angular route lifecycle hook: runs before entering a protected route.
canActivate(): boolean {

  if (this.authService.isLoggedIn) {
    return true;
  }

  // Redirect to login page when user is not authenticated.
  this.router.navigate(['/login']);
  return false;
}
}
