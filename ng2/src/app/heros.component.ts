import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heros',
  directives: [HeroDetailComponent],
  templateUrl: 'heros.component.html',
  styleUrls: ['heros.component.css'],
  providers: [HeroService]
})
export class HerosComponent implements OnInit {
  heros: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService, private router: Router) {
    
  }
  
  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }
  
  gotoDetail(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
  
  getHeros() {
    this.heroService.getHeros().then(heros => this.heros = heros);
  }
  
  ngOnInit() {
    this.getHeros();
  }
}