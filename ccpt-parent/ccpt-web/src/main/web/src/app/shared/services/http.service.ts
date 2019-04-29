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
  create(component:string,data: any, url) {
    console.log(component,data);
    return this.http.post(url, data);
  }
}