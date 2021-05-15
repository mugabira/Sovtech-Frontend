import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Joke} from '../models/Joke'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RandomJokeServiceService {  
  private serviceUrl = environment.jandomJokeAPIUrl
  
constructor(private http: HttpClient) { }

getJokes(str: string) {
  return this.http.get(this.serviceUrl+str)
}

}
