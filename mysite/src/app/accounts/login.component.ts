import { Component } from '@angular/core';

import { MyUser }    from './account';
import { ViewChild } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';

@Component({
  selector: 'hero-login',
  templateUrl: './login.component.html'

})
export class MyLoginComponent {
  constructor(
    private AccountsService: AccountsService,
  ) {}

  model = MyUser;
  @ViewChild('f') form: any;
  onSubmit(){
    if (this.form.valid) {
      this.AccountsService.login(this.form.value)
      console.log("Form Submitted!");
}}}
