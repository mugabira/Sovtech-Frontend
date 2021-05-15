import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategorieslistComponent} from './categorieslist/categorieslist.component'
import {RandomjokeComponent} from './randomjoke/randomjoke.component'
import {PeoplelistComponent} from './peoplelist/peoplelist.component'
import {SearchComponent} from './search/search.component'

const routes: Routes = [
  {path: 'CategoriesList', component: CategorieslistComponent},
  {path: 'RandomJoke', component: RandomjokeComponent},
  {path: 'PeopleList', component: PeoplelistComponent},
  {path: 'Search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
