import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private readonly BACKEND_URL = "http://127.0.0.1:8000/";
  constructor(private http: HttpClient) { }

  get(endpoint: string) {
    return this.http.get<any[]>(this.BACKEND_URL + endpoint);
  }

  post(endpoint: string, body: Object = {}) {
    console.log(body)
    return this.http.post(this.BACKEND_URL + endpoint, body);
  }

  patch(endpoint: string, body: Object = {}) {
    return this.http.patch(this.BACKEND_URL + endpoint, body);
  }
}
