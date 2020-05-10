import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const baseUrl = 'http://localhost:8000/api/v1/lecturer-expertise';

@Injectable({
  providedIn: 'root'
})
export class LecturerExpertisesService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  getById(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
}

