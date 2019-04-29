import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }
  
  public getLogin(URL: string) {
    return this.http.get(URL);
  }
  data:any = {
    "username":"admin",
    "password":"123456",
    "token":"",
    "role":"",
    "description":""
  }
  create(component:string,data: any, url) {
    console.log(component,data);
    return this.http.post(url, data);
  }
  get(){
    return this.http.post("http://106.0.37.69:8081/login",this.data);
  }
}