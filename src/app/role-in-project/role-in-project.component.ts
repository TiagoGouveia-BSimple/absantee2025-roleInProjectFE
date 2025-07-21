import { Component, signal } from '@angular/core';
import { RoleInProjectDataService } from './role-in-project-data.service';
import { toRoleInProject } from './mappers/role-in-project.mapper';
import { RoleInProjectViewmodel } from './role-in-project-details/role-in-project.viewmodel';
import { RoleInProjectListComponent } from "./role-in-project-list/role-in-project-list.component";
import { RouterOutlet } from '@angular/router';
import { RoleDataService } from './role-data.service';
import { UserDataService } from './user-data.service';
import { forkJoin } from 'rxjs';
import { ProjectsDataService } from '../projects/projects-data.service';
import { MatDialog } from '@angular/material/dialog';
import { RoleInProjectDetailsComponent } from './role-in-project-details/role-in-project-details.component';
import { RoleCreateComponent } from './role-create/role-create.component';

@Component({
  selector: 'app-role-in-project',
  imports: [RouterOutlet, RoleInProjectListComponent],
  templateUrl: './role-in-project.component.html',
  styleUrl: './role-in-project.component.css'
})
export class RoleInProjectComponent {
  roleInProjects = signal<RoleInProjectViewmodel[]>([]);
  roleMap: Map<string, string> = new Map();
  userMap: Map<string, string> = new Map();
  projectMap: Map<string, string> = new Map();

  constructor(
    private roleInProjectDataService: RoleInProjectDataService,
    private roleDataService: RoleDataService,
    private userDataService: UserDataService,
    private projectDataService: ProjectsDataService,
    private dialog: MatDialog
  ) {
    this.reloadList();
  }

  openDetails(roleInProject: RoleInProjectViewmodel | null) {
    console.log(this.projectMap);
    let ripDialogue = this.dialog.open(RoleInProjectDetailsComponent, {
      data: {
        roleInProject: roleInProject,
        projectMap: this.projectMap,
        userMap: this.userMap,
        roleMap: this.roleMap,
      }
    });

    ripDialogue.afterClosed().subscribe(res => {
      this.reloadList();
    });
  }

  openCreateRole() {
    let roleDialogue = this.dialog.open(RoleCreateComponent);
  }

  reloadList() {
    forkJoin({
      roleInProjects: this.roleInProjectDataService.getRoleInProjects(),
      roles: this.roleDataService.getRoles(),
      users: this.userDataService.getUsers(),
      projects: this.projectDataService.getProjects()
    }).subscribe({
      next: ({ roleInProjects, roles, users, projects }) => {
        this.roleMap = new Map(roles.map(r => [r.id, r.description]));
        this.userMap = new Map(users.map(u => [u.id, u.email]));
        this.projectMap = new Map(projects.map(p => [p.id!, p.acronym]));

        const viewModels = roleInProjects.map(r =>
          toRoleInProject(r, this.roleMap, this.userMap, this.projectMap)
        );

        this.roleInProjects.set(viewModels);
      },
      error: (err) => {
        alert('Error loading data');
        console.error('Error loading data', err);
      }
    });
  }
}
