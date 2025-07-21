import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { RoleInProjectDataService } from '../../role-in-project/role-in-project-data.service';
import { RoleInProjectViewmodel } from '../../role-in-project/role-in-project-details/role-in-project.viewmodel';
import { UserDataService } from '../../role-in-project/user-data.service';
import { RoleDataService } from '../../role-in-project/role-data.service';
import { ProjectsDataService } from '../projects-data.service';

@Injectable({ providedIn: 'root' })
export class ProjectRoleResolver implements Resolve<RoleInProjectViewmodel[]> {
  constructor(private service: RoleInProjectDataService,
    private userService: UserDataService,
    private roleService: RoleDataService,
    private projectService: ProjectsDataService
  ) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<RoleInProjectViewmodel[]> {
    var id = route.paramMap.get('roleId')!;

    return forkJoin({
      roleInProjects: this.service.getRoleInProjectsByProject(id),
      users: this.userService.getUsers(),
      roles: this.roleService.getRoles(),
      project: this.projectService.getProjectById(id)
    }).pipe(
      map(({ roleInProjects, users, roles, project }) => {
        return roleInProjects.map(rip => {
          const user = users.find(u => u.id === rip.userId);
          const role = roles.find(r => r.id === rip.roleId);

          return {
            roleInProjectId: rip.roleInProjectId,
            projectId: project.id!,
            projectAcronym: project.acronym,
            period: rip.period,
            userId: user?.id || '',
            userEmail: user?.email || '',
            roleId: role?.id || '',
            roleName: role?.description || ''
          } as RoleInProjectViewmodel;
        });
      })
    );
  }
}
