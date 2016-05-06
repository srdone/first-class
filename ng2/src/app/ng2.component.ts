import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'ng2-app',
  directives: [HeroDetailComponent],
  templateUrl: 'ng2.component.html',
  styleUrls: ['ng2.component.css'],
  providers: [HeroService]
})
export class Ng2AppComponent implements OnInit {
  title = 'Tour of Heros';
  selectedHero: Hero;
  heros: Hero[];
  
  constructor(private heroService: HeroService) {
    
  }
  
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  
  getHeros() {
    this.heroService.getHeros().then(heros => this.heros = heros);
  }
  
  ngOnInit() {
    this.getHeros();
  }
}