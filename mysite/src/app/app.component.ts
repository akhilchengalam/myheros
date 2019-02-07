import { Component, OnInit } from '@angular/core';
import { AccountsService } from './_services/accounts.service';


@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],

  template: `
   <h1 style="padding-left:70px">{{title}}</h1>
   <nav>
     <div *ngIf="this.AccountsService.getisLoggedIn()" style="padding-left:70px">
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
     <a routerLink="/list">List</a>
     <a routerLink="/logout">Logout</a>
     </div>
     <div *ngIf="!this.AccountsService.getisLoggedIn()" style="padding-left:70px">
     <a routerLink="/login">Login</a>
     <a routerLink="/signup">SignUp</a>
     </div>
   </nav>
   <router-outlet></router-outlet>
 `
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(
    private AccountsService: AccountsService,
  ) {}
}
