import { Component } from '@angular/core';

import { MyUser }    from './account';
import { ViewChild } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'hero-login',
  templateUrl: './login.component.html'

})
export class MyLogoutComponent {
  constructor(
    private AccountsService: AccountsService,
  ) {
    this.AccountsService.logout2()
  }

model = MyUser;
//   onSubmit(){
//       this.AccountsService.logout2()
//       console.log("Form Submitted!");
// }
}
