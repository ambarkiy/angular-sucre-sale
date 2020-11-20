import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanLoad {
  constructor(private userService: UserService) {}
  canLoad(route: Route): boolean {
    return this.checkLogin(route);
  }

  checkLogin(route: Route): boolean {
    const user = this.userService.user;
    return user && route.data.role === user.role;
  }
}
