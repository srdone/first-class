import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { HerosComponent } from './heros.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { DashboardComponent } from './dashboard.component';

@Routes([
  {path: '/heros', component: HerosComponent},
  {path: '/dashboard', component: DashboardComponent},
  {path: '/detail/:id', component: HeroDetailComponent},
  {path: '*', component: HerosComponent}
 ])
@Component({
  moduleId: module.id,
  selector: 'ng2-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService],
  templateUrl: 'ng2.component.html',
  styleUrls: ['ng2.component.css'],
})
export class Ng2AppComponent {
  title = 'Tour of Heros';
}