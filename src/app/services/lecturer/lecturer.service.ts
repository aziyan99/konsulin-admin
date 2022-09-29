import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const baseUrl = 'http://konsulin-rest.herokuapp.com/api/v1/lecturer';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

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

  update(id, data) {
    return this.http.patch(`${baseUrl}/${id}`, data);
  }

  destroy(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
