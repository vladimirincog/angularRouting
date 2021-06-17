import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth = false;

  login() {
    this.isAuth = true;
    console.log("isAuth", this.isAuth)
  }

  logout() {
    this.isAuth = false;
    console.log("isAuth", this.isAuth)
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000);
    });
  }
}
