import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
baseURL = "http://localhost:3000/locations"
  constructor(private http : HttpClient) { }
  getList(){
    return this.http.get(this.baseURL)
  }
  saveLocation(location:any){
  //console.warn("new location : ", location)
  return this.http.post(this.baseURL,location)
  }
  removeLocation(id:number){
     return this.http.delete(`${this.baseURL}/${id}`)
  }
  getLocation(id:number){
  return this.http.get(`${this.baseURL}/${id}`)
  }
  updateLocation(id:number,updatedLocation:any){
   return this.http.put(`${this.baseURL}/${id}`,updatedLocation)
  }

}
