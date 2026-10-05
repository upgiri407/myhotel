// Menu API service: calls backend with the search value and returns matching menu items.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuApiService {

  // Backend endpoint that searches menu items based on query parameter.
  //private apiUrl = 'http://localhost:3000/api/menu/search';
  private apiUrl = 'http://localhost:3001/api/menu/search';//for docker

  constructor(private http: HttpClient) {}

  // searchMenu(): sends typed value to backend and returns results.
  searchMenu(value: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}?q=${value}`
    );
  }
}