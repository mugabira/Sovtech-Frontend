import { Component, OnInit } from '@angular/core'
import { SearchService } from '../services/search.service'
import { ActivatedRoute } from '@angular/router'
import {DataSource} from '@angular/cdk/collections'
import { Observable } from 'rxjs/Observable'
import { Joke } from '../models/Joke'
import { Person } from 'node_modules_old/@schematics/update/update/package-json'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  displayedColumns = ['name', 'height', 'mass', 'hair_color', 'eye_color', 'birth_year', 'gender', 'homeworld'];

  public searchTerm:string = this.activatedRoute.snapshot.queryParamMap.get('searchTerm')??''
  public searchJokesResults = new JokeDataSource(this.searchService, this.searchTerm);
  public searchPeopleResults = new PeopleDataSource(this.searchService, this.searchTerm);
  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {
  }

}
export class JokeDataSource extends DataSource<any> {
  constructor(private searchService: SearchService, private searchWord: string) {
    super();
  }
  connect(): Observable<Joke[]> {
    return this.searchService.getSearchJokeResponse(this.searchWord)
  }
  disconnect() {}
}
export class PeopleDataSource extends DataSource<any> {
  constructor(private searchService: SearchService, private searchWord: string) {
    super();
  }
  connect(): Observable<Person[]> {
    return this.searchService.getSearchPeopleResponse(this.searchWord)
  }
  disconnect() {}
}
