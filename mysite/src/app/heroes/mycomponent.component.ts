import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { Router }            from '@angular/router';

import { Hero }                from './hero';
import { HeroService }         from '../_services/hero.service';


@Component({
  selector: 'my-component',
template:`
  <li *ngFor="let hero of results">
    {{ hero.name }}
  </li>
`
})

export class MyComponent implements OnInit{

  results: Hero[];

  // Inject HttpClient into your component or service.
  constructor(
    private heroService: HeroService,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(results => this.results = results);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
