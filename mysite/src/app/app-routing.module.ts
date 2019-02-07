import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './heroes/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './heroes/hero-detail.component';
import { HeroFormComponent }  from './accounts/hero-form.component';
import { MyComponent }  from './heroes/mycomponent.component';
import { MyLoginComponent }  from './accounts/login.component';
import { MyLogoutComponent }  from './accounts/logout.component';
import { OnlyLoggedInUsersGuard ,SignupGuard}  from './_services/accounts.service';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // accessible only to guests
  {
      path: '',
      component: MyLoginComponent,
      canActivate: [ SignupGuard ]


  },
  {
      path: 'login',
      component: MyLoginComponent,
      canActivate: [ SignupGuard ]

  },
  {
      path: 'signup',
      component: HeroFormComponent,
      canActivate: [ SignupGuard ]

  },

  // accessible only to authenticated users
  {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [ OnlyLoggedInUsersGuard ]
  },
  {
      path: 'detail/:id',
      component: HeroDetailComponent,
      canActivate: [ OnlyLoggedInUsersGuard ]
  },
  {
      path: 'heroes',
      component: HeroesComponent,
      canActivate: [ OnlyLoggedInUsersGuard ]
  },
  {
      path: 'list',
      component: MyComponent,
      canActivate: [ OnlyLoggedInUsersGuard ]
  },
  {
      path: 'logout',
      component: MyLogoutComponent,
      canActivate: [ OnlyLoggedInUsersGuard ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
