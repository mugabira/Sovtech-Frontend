import { Injectable }   from '@angular/core'
import { HttpClient }   from '@angular/common/http'
import { Observable }   from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {ResponsePeople} from '../models/People'
import {throwError} from 'rxjs'
import {catchError, map} from 'rxjs/operators'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {  
  private serviceUrl = environment.peopleAPIUrl
  
constructor(private http: HttpClient) { }

getPeopleList()  {
  return this.http.get<ResponsePeople>(this.serviceUrl).pipe(
    map(res => res.results || []),
    catchError(error => throwError(error.message || error))
 );
}


}
