import { Component } from '@angular/core';
import {CategorieslistComponent} from './categorieslist/categorieslist.component'
import {RandomjokeComponent} from './randomjoke/randomjoke.component'
import {PeoplelistComponent} from './peoplelist/peoplelist.component'
import {SearchComponent} from './search/search.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sovtech-frontend';
}
