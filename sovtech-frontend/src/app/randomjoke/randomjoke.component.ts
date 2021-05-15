import { Component, OnInit } from '@angular/core';
import { RandomJokeServiceService } from '../services/random-joke-service.service';
import 'rxjs/add/observable/of';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-randomjoke',
  templateUrl: './randomjoke.component.html',
  styleUrls: ['./randomjoke.component.css']
})
export class RandomjokeComponent implements OnInit {
  public randomJokes: any
  public searchCategory:string = ''
  
  constructor(private activatedRoute: ActivatedRoute, private randomJokeService: RandomJokeServiceService) { }
  
  ngOnInit() {
    this.searchCategory = this.activatedRoute.snapshot.queryParamMap.get('Category')??''
    this.randomJokeService.getJokes(this.searchCategory).subscribe(res => {
      this.randomJokes = res;
    })
  }
}