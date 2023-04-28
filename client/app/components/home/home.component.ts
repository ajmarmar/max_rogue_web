import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private routesSrv = inject(Router);

  startGame(){
   this.navigate('start');
  }

  configGame() {
    this.navigate('config');
  }

  loadGame(){
    this.navigate('load');
  }

  private navigate( path: string){
    this.routesSrv.navigateByUrl(path);
  }
}
