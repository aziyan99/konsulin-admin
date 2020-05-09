import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8000/api/v1/student';

@Injectable({
  providedIn: 'root'
})
export class KonsulinService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }
}
