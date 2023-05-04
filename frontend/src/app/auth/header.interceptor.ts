import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { PathMap } from '../app-routing.module';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.includes('/api/v1/auth'))
      return next.handle(request);

    if(this.authService.isAuthenticated()) {
      const token = this.authService.getToken();
      if(token != undefined) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token?.token}`)
      });
      return next.handle(authRequest);
    } else {
      if(request.url.includes('/api/v1/auth/register')){
        this.router.navigate([PathMap.registerPath]);
      } else {
        this.router.navigate([PathMap.loginPath]);
      }
    }
  }
  return next.handle(request);
}
}
