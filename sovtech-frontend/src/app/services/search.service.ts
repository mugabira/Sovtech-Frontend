import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment'
import {Search} from  '../models/Search'
import {throwError} from 'rxjs'
import {catchError, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private serviceUrl = environment.searchAPIUrl
  constructor(private http: HttpClient) { }

  getSearchJokeResponse(str: string)  {
    return this.http.get<Search>(this.serviceUrl+str).pipe(
      map(res => res.jokeSearchResponse.result || []),
      catchError(error => throwError(error.message || error))
   );
  }

  getSearchPeopleResponse(str: string)  {
    return this.http.get<Search>(this.serviceUrl+str).pipe(
      map(res => res.peopleSearchResponse.result || []),
      catchError(error => throwError(error.message || error))
   );
  }

  
}
