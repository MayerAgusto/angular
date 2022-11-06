import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Data } from '../models/Data';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URI = "https://crudcrud.com/api/d47daf1780c944ab8041138efcdde04d"
  constructor(private http: HttpClient) {}

  getDatas(){
    
    return this.http.get(`${this.API_URI}/unicorns`);
  }
  getData(id: String){
    return this.http.get(`${this.API_URI}/unicorns/${id}`);
  }
  saveData(data: Data){
    return this.http.post(`${this.API_URI}/unicorns`, data);
  }
  deleteData(id: String){
    return this.http.delete(`${this.API_URI}/unicorns/${id}`);
  }
  updateData(id: String, data: Data){
    return this.http.put(`${this.API_URI}/unicorns/${id}`, data);
  }
}
