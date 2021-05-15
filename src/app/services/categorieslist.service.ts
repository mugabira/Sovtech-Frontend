import { Injectable }   from '@angular/core'
import { HttpClient }   from '@angular/common/http'
import { Observable }   from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategorieslistService{  
  private serviceUrl = environment.categoriesAPIUrl
  
constructor(private http: HttpClient) { }

getCategories(): Observable<string[]> {
 
  var x = this.http.get<string[]>(this.serviceUrl);

  return x;
}


}