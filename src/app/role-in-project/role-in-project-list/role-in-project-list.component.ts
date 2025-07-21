import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { RoleInProjectViewmodel } from '../role-in-project-details/role-in-project.viewmodel';

@Component({
  selector: 'app-role-in-project-list',
  imports: [],
  templateUrl: './role-in-project-list.component.html',
  styleUrl: './role-in-project-list.component.css'
})
export class RoleInProjectListComponent {
  @Input() inputRoleInProjects!: RoleInProjectViewmodel[];
  @Output() openDetails = new EventEmitter<RoleInProjectViewmodel>();

  roleInProjects: RoleInProjectViewmodel[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if(changes['inputRoleInProjects'] && this.inputRoleInProjects) {
      this.roleInProjects = this.inputRoleInProjects;
    }
  }
}
