import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import {Person} from '../models/People'
//import {MatPaginator} from '@angular/material/paginator';
//import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'height', 'mass', 'hair_color', 'eye_color', 'birth_year', 'gender', 'homeworld'];

  constructor(private userService: PeopleService) { }
  
  ngOnInit() {
  }
}export class UserDataSource extends DataSource<any> {
  constructor(private peopleService: PeopleService) {
    super();
  }
  connect(): Observable<Person[]> {
    return this.peopleService.getPeopleList();
  }
  disconnect() {}
}
