import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROS } from './mock-heros';

let herosPromise = Promise.resolve(HEROS);

@Injectable()
export class HeroService {
  getHeros() {
    return herosPromise;
  }
  
  getHero(id: number) {
    return herosPromise.then(heros => heros.filter(h => h.id === +id)[0]);
  }
  
  getHerosSlow() {
    return new Promise<Hero[]>((resolve) => {
      setTimeout(function () { resolve(HEROS) }, 1000);
    });
  }
}