import { Component, OnInit } from '@angular/core';
import { CategorieslistService } from '../services/categorieslist.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-categorieslist',
  templateUrl: './categorieslist.component.html',
  styleUrls: ['./categorieslist.component.css']
})
export class CategorieslistComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name'];
  constructor(private userService: CategorieslistService) { }
  
  ngOnInit() {
  }
}export class UserDataSource extends DataSource<any> {
  constructor(private categoriesService: CategorieslistService) {
    super();
  }
  connect(): Observable<string[]> {
    return this.categoriesService.getCategories();
  }
  disconnect() {}
}