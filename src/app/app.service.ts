import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
baseURL = "http://localhost:3000/"
  constructor(private http : HttpClient) { }
  getList(){
    return this.http.get(this.baseURL+"locations")
  }
}
