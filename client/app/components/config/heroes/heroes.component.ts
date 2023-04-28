import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  showFormHero = false;

  ppp = '';
  selectedCar: number | undefined;

    cars = [
        { id: 1, name: 'Volvo' },
        { id: 2, name: 'Saab' },
        { id: 3, name: 'Opel' },
        { id: 4, name: 'Audi' },
    ];

  nuevoHeroe(){
    this.showFormHero = true;
  }

  backListHeroes(){
    this.showFormHero = false;
  }
}
