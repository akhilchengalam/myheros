import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot
} from '@angular/router';

import { AccountsService } from './_services/accounts.service';

// @Injectable()
// export class UserAccessGuard implements CanActivate {
//     constructor(private accountsService: AccountsService) {
//     }
//
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         return route.data['onlyGuests'] != this.accountsService.getisLoggedIn();
//     }
// }

// @Injectable()
// export class UserAccessGuard implements CanActivate {
//   constructor(private accountsService: AccountsService) {};
//
//   canActivate() {
//     console.log("OnlyLoggedInUsers");
//     if (this.accountsService.getisLoggedIn()) {
//       return true;
//     } else {
//       window.alert("You don't have permission to view this page");
//       return false;
//     }
//   }
// }
