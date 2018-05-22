
// import Component from angular core library
import { Component, OnInit } from '@angular/core';

// import newly created Hero class (in src/app/hero.ts)
import { Hero } from '../hero';

// import mock heroes data file
//  import { HEROES } from '../mock-heroes';

// Hero data will nonw be accessed via a service
import { HeroService } from '../hero.service';

// annotate component class with metadata-specifying decorator function
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }
  
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
