import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../heroes/hero';
import { MyUser } from '../accounts/account';
import { Router } from '@angular/router';

import { AccountsService } from '../_services/accounts.service';


@Injectable()
export class HeroService {
  private currentUser = localStorage.getItem('currentUser');
  private headers = new Headers();

  private heroesUrl : string = 'http://localhost:8000/api/heroes';
  private isLoggedIn : boolean = false;
  constructor(private http: HttpClient, private router: Router,private AccountsService: AccountsService,) {
      // this.headers.append({}"Authorization":"Token 5a6ef85f863b259e54ad0a2651f491674923b654")
      // this.headers.append('Content-Type', 'application/json');

    // this.headers.append('Authorization', `Token ${this.currentUser}`);

    }
    // getData(): void {
    //   debugger;
    //     this.http.get('http://localhost:8000/api/search/superman/').subscribe(data => {
    //       console.log(data);
    //     });
    //   }
  getisLoggedIn():boolean{
    if(localStorage.getItem('currentUser')){
    return true}
    else{return false}
  }

  setisLoggedIn(value:boolean):void{
    this.isLoggedIn=value;
  }

  getHeroes(): Promise<Hero[]> {
    const url = `${this.heroesUrl}/`
    return this.http.get(url)
               .toPromise()
               .then(response => response as Hero[])
               .catch(this.handleError);
  }


  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}/`;
    return this.http.get(url)
      .toPromise()
      .then(response => response as Hero[])
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}/`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    const url = `${this.heroesUrl}/`
    return this.http
      .post(url, JSON.stringify({name: name}))
      .toPromise()
      .then(response => response as Hero[])
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}/`;
    return this.http
      .put(url, JSON.stringify(hero))
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  search(term: string): Observable<Hero[]> {
    const url = `http://localhost:8000/api/search/${term}/`;
    return this.http
               .get(url)
               .map(response => response as Hero[]);
  }
  // firstname:string,lastname:string,email:string,username:string,password:string
  // JSON.stringify({firstname:firstname,lastname:lastname,email:email,username:username,password:password}
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
