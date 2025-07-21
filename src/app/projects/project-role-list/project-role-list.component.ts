import { Component } from '@angular/core';
import { ProjectViewModel } from '../models/project-view-model.model';
import { ActivatedRoute } from '@angular/router';
import { RoleInProjectViewmodel } from '../../role-in-project/role-in-project-details/role-in-project.viewmodel';

@Component({
  selector: 'app-project-role-list',
  imports: [],
  templateUrl: './project-role-list.component.html',
  styleUrl: './project-role-list.component.css'
})
export class ProjectRoleListComponent {
  roleInProjects: RoleInProjectViewmodel[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.roleInProjects = data['RoleData'];
    });
  }
}
