import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }
  private base_url = 'http://210.16.76.202:8081/';

  public getLogin(URL: string) {
    return this.http.get(URL);
  }
  create(data: any, url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-TOKEN': sessionStorage.getItem('access_token')
      })
    };
    return this.http.post(this.base_url + url, data);
  }
  get(URL: string) {
    return this.http.get(this.base_url + URL);
  }
  update(data: any, URL) {
    return this.http.put(this.base_url + URL, data);
  }
  delete(URL: string) {
    return this.http.delete(this.base_url + URL);
  }
  upload(URL: string, formData: any) {
    //'X-TOKEN': sessionStorage.getItem('access_token'),
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
      })
    };
    return this.http.post(this.base_url + URL, formData);
  }
}
