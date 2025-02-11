import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly platformId = inject(PLATFORM_ID);
  isAuthenticated = false;

  constructor(private router: Router) {}


  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId) && localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}