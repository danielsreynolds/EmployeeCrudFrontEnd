import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private SERVER = "https://localhost:44396/api/values/"

  constructor( private httpClient: HttpClient) { }

  public getEmployees(){
    return this.httpClient.get(this.SERVER)
  }

  public getEmployee(id){
    return this.httpClient.get(this.SERVER + id);
  }

  public addEmployee(data){
    return this.httpClient.post(this.SERVER, data);
  }

  public deleteEmployee(id){
    return this.httpClient.delete(this.SERVER + id);
  }

  public editEmployee(id, data){
    return this.httpClient.put(this.SERVER + id, data);
  }
}
