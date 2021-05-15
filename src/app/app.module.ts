import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieslistComponent } from './categorieslist/categorieslist.component';
import { RandomjokeComponent } from './randomjoke/randomjoke.component';
import { PeoplelistComponent } from './peoplelist/peoplelist.component';
import { SearchComponent } from './search/search.component';
//import { FormsModule } from '@angular/forms';
import { CategorieslistService } from './services/categorieslist.service';
import {MatCardModule} from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http'
//import {MatPaginator} from '@angular/material/paginator'
//import {MatSort} from '@angular/material/sort'
//import {MatTableDataSource} from '@angular/material/table'
import {PeopleService} from './services/people.service'
import {RandomJokeServiceService} from './services/random-joke-service.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationbarComponent } from './navigationbar/navigationbar.component'
import { Angular2SwapiModule } from 'angular2-swapi';

@NgModule({
  declarations: [
    AppComponent,
    CategorieslistComponent,
    RandomjokeComponent,
    PeoplelistComponent,
    SearchComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    Angular2SwapiModule
    
  ],
  exports: [
  ],
  providers: [CategorieslistService, PeopleService, RandomJokeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
