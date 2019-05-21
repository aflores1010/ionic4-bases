import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentInterface } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
   return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getOptionsMenu() {
    return this.http.get<ComponentInterface[]>('/assets/data/menu.json');
  }

  geSearchbarData() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http.get<any[]>('/assets/data/superheroes.json');
  }
}
