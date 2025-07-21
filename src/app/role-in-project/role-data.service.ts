import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from './role';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleDataService {
  private httpClient = inject(HttpClient);
  private readonly baseUrlQuery = environment.apiRoleQuery;
  private readonly baseUrlCmd = environment.apiRoleCmd;

  constructor() { 

  }

  getRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(`${this.baseUrlQuery}/roles`);
  }

  getRoleById(id: string): Observable<Role> {
    return this.httpClient.get<Role>(`${this.baseUrlQuery}/roles/${id}`);
  }

  createRole(description: string): Observable<Role> {
    return this.httpClient.post<Role>(`${this.baseUrlCmd}/roles`, {description});
  }
}
