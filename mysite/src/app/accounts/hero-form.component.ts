import { Component } from '@angular/core';

import { MyUser }    from './account';
import { ViewChild } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'hero-form',
templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {
  constructor(
    private AccountsService: AccountsService,
  ) {}

  model = MyUser;
  @ViewChild('f') form: any;
  onSubmit(){
    if (this.form.valid) {
      this.AccountsService.signup(this.form.value)
      console.log("Form Submitted!");
}}}
