import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROS } from './mock-heros';

@Injectable()
export class HeroService {
  getHeros() {
    return new Promise<Hero[]>((resolve) => {
      setTimeout(function () { resolve(HEROS) }, 1000);
    });
  }
}