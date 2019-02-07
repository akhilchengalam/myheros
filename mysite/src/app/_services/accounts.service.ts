import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../heroes/hero';
import { MyUser } from '../accounts/account';
import { Router } from '@angular/router';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot
} from '@angular/router';


@Injectable()
export class AccountsService {
  private currentUser = localStorage.getItem('currentUser');

  private headers:any = new Headers();
  private isLoggedIn : boolean = false;
  private non_field_errors : boolean=false;
  private SignUperrors:boolean=false;
  private emailerrors:boolean=false;
  private usernameerrors:boolean=false;

  token:string=""

  constructor(private http: Http, private router: Router) {
    this.headers.append('Content-Type', 'application/json');
  // this.headers.append('Authorization', `Token ${this.currentUser}`);
}

getisLoggedIn():boolean{
  if(localStorage.getItem('currentUser')){
  return true}
  else{return false}
}

public getToken(): string {
    return localStorage.getItem('currentUser');
  }

  isLoggedInn(): boolean {
   let data:any;
    data=localStorage.getItem('currentUser');
    if(data)
   return true;
   else
       return false;
}

  signup(data:MyUser): Promise<any> {
    let user1:any;
    let data1:any;

    const url = `http://localhost:8000/api/rest-auth/registration/`;
    return this.http
      .post(url,JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(response => {
         user1 = response.json()['key']
         this.token=user1;
         this.SignUperrors=false;
         this.emailerrors=false;
         this.usernameerrors=false;
            if (user1) {
                localStorage.setItem('currentUser', user1);
            }
            data1=localStorage.getItem('currentUser');
            this.isLoggedIn = true;
            this.router.navigate(['dashboard'])
            console.log(data1)
          })
      .catch(response =>{
        user1 = response.json()
        this.SignUperrors=true;
        if(user1.email){
        this.emailerrors=true;}
        if(user1.username){
        this.usernameerrors=true;}}

      );
  }
  editprofile(data:MyUser): Promise<MyUser> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    //     if (currentUser) {
    //         this.headers.append({ 'Authorization': 'Bearer ' + currentUser.json });
    // }
    if (currentUser) {
        this.headers.append({ 'Authorization': 'Token ' + currentUser.json });
}
    const url = `http://localhost:8000/api/rest-auth/registration/`;
    return this.http
      .post(url,JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  loin(data:MyUser): Promise<MyUser> {
    let user1:any;
    let data1:any;

    const url = `http://localhost:8000/api/accounts/`;
    return this.http
      .post(url,JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(response => {
         user1 = response.json()['key']

            if (user1) {
                localStorage.setItem('currentUser', user1);
            }
            data1=localStorage.getItem('currentUser');
            this.router.navigate(['dashboard'])
            console.log(data1)
          })
      .catch(this.handleError);
  }
login(data:MyUser): Promise<any> {
  let user1:any;
  let data1:any;
  const url = `http://localhost:8000/api/rest-auth/login/`;
          return this.http
          .post(url,JSON.stringify(data), {headers: this.headers})
          .toPromise()
          .then(response =>{
             user1 = response.json()['key']
             this.non_field_errors=false;
this.token=user1;
                if (user1) {
                    localStorage.setItem('currentUser', user1);
                }
                data1=localStorage.getItem('currentUser');
                this.isLoggedIn = true;
                this.router.navigate(['dashboard'])
                console.log(data1)
              })


            .catch(response =>{user1 = response.json()
              this.non_field_errors=true;});

    }

  logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
  }
  logout2():Promise<MyUser> {

        // remove user from local storage to log user out
        const url = `http://localhost:8000/api/rest-auth/logout/`;
                return this.http
                .post(url, {headers: this.headers})
                .toPromise()
                .then(response => {

                  localStorage.removeItem('currentUser');
                  this.token="";
                  this.isLoggedIn = false;
                  this.router.navigate(['login'])
                })
                .catch(this.handleError);
              }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  }

  @Injectable()
  export class OnlyLoggedInUsersGuard implements CanActivate {
   constructor(
     private AccountsService: AccountsService,private router: Router
   ) {};

   canActivate() {
     console.log("OnlyLoggedInUsers");
     if (this.AccountsService.isLoggedInn()) {
       return true;
     } else {
       this.router.navigate(['login'])
       window.alert("You don't have permission to view this page");
       return false;
     }
   }
  }

  @Injectable()
  export class SignupGuard implements CanActivate {
   constructor(private AccountsService: AccountsService,private router: Router
) {};

   canActivate() {
     if (this.AccountsService.isLoggedInn()) {
       this.router.navigate(['dashboard'])
       window.alert("You are already logged in");
       return false;
     } else {
       return true;
     }
   }
  }
