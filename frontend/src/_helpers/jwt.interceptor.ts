import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError, catchError } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AuthenticationService } from "../app/services/authentication.service";
import { AlertComponent } from "../app/alert/alert.component";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService,
      private dialog: MatDialog,
      private route: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        // get token from authentication service
        const userAuth = this.authService.getToken();

        // altera header header, incluindo o token
        if (userAuth) {

            request = request.clone({
                setHeaders: {
                    "Authorization": `Bearer ${userAuth}`,
                }
            });
        }

        // handle errors
        return next.handle(request)
         .pipe(
          catchError( err => {

            if (err.status == 401 || err.status == 403) {
               // log out
               this.authService.logOut();

               // criar um alerta aqui
               this.dialog.open(AlertComponent, {
                   data: {
                     title: 'Sessão expirada',
                     msg: 'Entre novamente com seus dados'
                   },
                 });

               // redirect for login page
               this.route.navigate(['/login']);
            }

            return throwError(() => new Error(err.error.msg));
          })
         );
    }
}
