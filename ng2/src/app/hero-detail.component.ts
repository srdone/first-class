import { Component, Input, OnInit } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label for="heroName">name: </label>
        <input name="heroName" type="text" [(ngModel)]="hero.name" placeholder="name">
      </div>
      <p>
        <button (click)="gotoHeros()">Back</button>
      </p>
    </div>
  `
})
export class HeroDetailComponent implements OnActivate {
  hero: Hero;
  
  constructor(private router: Router, private heroService: HeroService) {}
  
  routerOnActivate(routeSegment: RouteSegment) {
    let id = +routeSegment.getParam('id');
    this.heroService.getHero(id).then(hero => this.hero = hero);
  }
  
  gotoHeros() {
    this.router.navigate(['/heros']);
  }
}