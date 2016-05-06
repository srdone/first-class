import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  heros: Hero[];
  constructor(private heroService: HeroService){}
  
  ngOnInit() {
    this.heroService.getHeros().then(heros => this.heros = heros.slice(1, 5));
  }
  
  gotoDetail(hero) {
    console.log('goto Detail', hero);
  }
}