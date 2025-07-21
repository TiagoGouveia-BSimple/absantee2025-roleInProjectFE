import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { User } from './user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private httpClient = inject(HttpClient)
  private readonly baseUrlQuery = environment.apiUserQuery;

  constructor() {

  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrlQuery}/users`)
  }
}
