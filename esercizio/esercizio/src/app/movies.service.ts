import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiUrl:string = 'http://localhost:3000/movies';

  constructor(
    private http: HttpClient,
  ) { }

  getAll(){
    return this.http.get(this.apiUrl)
  }

}
