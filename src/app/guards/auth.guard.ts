import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router) {}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.validaAutenticacao();
    }

    canLoad(
      route: Route,
      segments: UrlSegment[]):
      boolean | Observable<boolean> | Promise<boolean> {
      return this.validaAutenticacao();
    }

    private validaAutenticacao() {
      if (this.authService.usuarioEstaAutenticado()) {
        return true;
      }

      this.router.navigate(['/login']);
      return false;
    }
}
