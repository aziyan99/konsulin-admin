import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8000/api/v1';

@Injectable({
  providedIn: 'root',
})
export class OtherService {
  constructor(private http: HttpClient) {}

  getConsultGroup() {
    return this.http.get(`${baseUrl}/consultdata`);
  }

  getThesisData() {
    return this.http.get(`${baseUrl}/thesisdata`);
  }
}
