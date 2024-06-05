import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobatoService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:1111/Mobato";
  addMobile(payload: any){
    return this.http.post(`${this.url}/add-mobile`,payload).pipe(
      catchError(e=>{
        return of(null);
      })
    )
  }

  getMobile(){
    return this.http.get(`${this.url}/get-all-mobile`);
  }
}
