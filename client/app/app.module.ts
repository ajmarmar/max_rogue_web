// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

//External Componentents
import { NgSelectModule } from '@ng-select/ng-select';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
// Services

// Components
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { StartComponent } from './components/start/start.component';
import { ConfigComponent } from './components/config/config/config.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroesComponent } from './components/config/heroes/heroes.component';
import { DesksComponent } from './components/config/desks/desks.component';
import { DungeonsComponent } from './components/config/dungeons/dungeons.component';
import { SkillComponent } from './components/config/heroes/components/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

    //Component of gome
    HomeComponent,
    StartComponent,
    ConfigComponent,
    HeaderComponent,
    HeroesComponent,
    DesksComponent,
    DungeonsComponent,
    SkillComponent
  ],
  imports: [
    AppRoutingModule,

    //Module of Select component
    NgSelectModule,

    //Modules of NX-Bootstrap
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot(),

    SharedModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: (): string | null => localStorage.getItem('token'),
        // allowedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  providers: [
    BsLocaleService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
