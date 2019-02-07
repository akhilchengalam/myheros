import { AccountsService } from '../_services/accounts.service';
import { Injectable, NgModule} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  constructor(private currentUserService: AccountsService) { }
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const token: string = this.currentUserService.token;
   debugger
   let dupReq;
   if (token) {
             dupReq = req.clone({ headers: req.headers.set('Authorization', 'Token ' + token) });
           }
dupReq = req.clone({ headers: req.headers.set('Authorization', 'Token ' + token) });
  debugger
return next.handle(dupReq);
 }
};
@NgModule({
 providers: [
 { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
 ]
})
export class InterceptorModule { }


// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
//
// import { AccountsService } from '../_services/accounts.service';
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//
//     constructor(private currentUserService: AccountsService) { }
//
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         console.log(JSON.stringify(req));
// debugger
//         const token: string = this.currentUserService.token;
//         if (token) {
//             req = req.clone({ headers: req.headers.set('Authorization', 'Token ' + token) });
//         }
//         return next.handle(req);
//     }
// }
