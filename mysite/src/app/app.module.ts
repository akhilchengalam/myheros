import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppRoutingModule } from './app-routing.module';



import { AppComponent }         from './app.component';
import { DashboardComponent }   from './heroes/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './heroes/hero-detail.component';
import { HeroService }          from './_services/hero.service';
import { AccountsService }          from './_services/accounts.service';
import { HeroSearchComponent }  from './heroes/hero-search.component';
import { HeroFormComponent }  from './accounts/hero-form.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyComponent } from './heroes/mycomponent.component';
import { MyLoginComponent }  from './accounts/login.component';
import { MyLogoutComponent }  from './accounts/logout.component';
import { OnlyLoggedInUsersGuard ,SignupGuard}  from './_services/accounts.service';





@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroFormComponent,
    MyComponent,
    MyLoginComponent,
    MyLogoutComponent,
  ],
  providers: [ HeroService,AccountsService,OnlyLoggedInUsersGuard,SignupGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
