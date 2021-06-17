import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild{

constructor(public authService: AuthService,
    public router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        return this.authService.isAuthenticated().then((isAuth) => {
            if(isAuth){
                return true;
            }
            else{
               this.router.navigate(['/'], {
                    queryParams: {
                        auth: false
                    }
                })
                return false;
            }
        });
    }

    canActivateChild(   route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route, state)
    }
}