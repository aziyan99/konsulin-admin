import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8000/api/v1/student';

@Injectable({
  providedIn: 'root'
})
export class KonsulinService {

  constructor(private http: HttpClient) { }

  header(httpHeader: HttpHeaders) {
    httpHeader.append('Accept', 'Application/json');
  }

  getAll() {
    let setHeader = new HttpHeaders();
    this.header(setHeader);
    return this.http.get(baseUrl);
  }
}
