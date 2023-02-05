import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports: [
    // other imports
    // HttpClientModule,
    
  ],
  // other properties
})
export class SQLService {

  constructor(private http: HttpClient) { }


  // connectToDatabase(dbname: string, user: string, password: string, host: string) 
  // {
  //   const params = new HttpParams()
  //     .set('dbname', dbname)
  //     .set('user', user)
  //     .set('password', password)
  //     .set('host', host);

  //   return this.http.post('http://localhost:5000/connectDB', {}, { params });
  // }
  connectToDatabase(dbname: string, user: string, password: string, host: string): Observable<string> {
    const params = new HttpParams()
      .set('dbname', dbname)
      .set('user', user)
      .set('password', password)
      .set('host', host);
      console.log(params);
  
    return this.http.post<string>('http://localhost:5000/connectDB', {},{params});
  }
  

  // optimizeQuery(unoptimizedQuery: string) {
  //   const params = new HttpParams().set('unoptimized_query', unoptimizedQuery);
  //   return this.http.post('http://localhost:5000/optiQuery', {},  { params });
  // }
  optimizeQuery(unoptimizedQuery: string) {
    const params = new HttpParams().set('unoptimized_query', unoptimizedQuery);
    return this.http.post<{ optimized_query: string, optimized_time: number, unoptimized_query: string, unoptimized_time: number }>('http://localhost:5000/optiQuery', {},  { params });
  }
  


}
