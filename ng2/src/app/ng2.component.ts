import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

@Component({
  moduleId: module.id,
  selector: 'ng2-app',
  templateUrl: 'ng2.component.html',
  styleUrls: ['ng2.component.css']
})
export class Ng2AppComponent {
  title = 'Tour of Heros';
  selectedHero: Hero;
  heros = HEROES;
  
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

