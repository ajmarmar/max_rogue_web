// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Services

// Components
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import { ConfigComponent } from './components/config/config/config.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,
    children: [
      { path: 'start', component: StartComponent}
    ]},
  { path: 'config', component: ConfigComponent },

  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
