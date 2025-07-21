import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { RoleInProject } from './role-in-project';
import { CreateRoleInProject } from './role-in-project-details/create-role-in-project';

@Injectable({
  providedIn: 'root'
})
export class RoleInProjectDataService {
  private httpClient = inject(HttpClient);
  private readonly baseUrlCmd = environment.apiRoleInProjectCmd;
  private readonly baseUrlQuery = environment.apiRoleInProjectQuery;

  constructor() { 

  }

  getRoleInProjects(): Observable<RoleInProject[]> {
    return this.httpClient.get<RoleInProject[]>(`${this.baseUrlQuery}/role-in-project`);
  }

  getRoleInProjectsByProject(id: string): Observable<RoleInProject[]> {
    return this.httpClient.get<RoleInProject[]>(`${this.baseUrlQuery}/role-in-project/by-project?projectId=${id}`);
  }

  createRoleInProject(createRip: CreateRoleInProject) {
    return this.httpClient.post<CreateRoleInProject>(`${this.baseUrlCmd}/role-in-project`, createRip);
  }

  updateRoleInProject(rip: RoleInProject) {
    return this.httpClient.put<RoleInProject>(`${this.baseUrlCmd}/role-in-project/${rip.roleInProjectId}`, rip);
  }
}
