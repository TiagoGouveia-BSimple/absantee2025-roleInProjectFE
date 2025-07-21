import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { RoleInProjectViewmodel } from './role-in-project.viewmodel';
import { FormsModule } from '@angular/forms';
import { RoleInProjectDataService } from '../role-in-project-data.service';
import { CreateRoleInProject } from './create-role-in-project';
import { PeriodDate, PeriodDateString } from '../../PeriodDate';
import { F } from '@angular/cdk/keycodes';
import { RoleInProject } from '../role-in-project';
import { formatDate } from '../../utils/date';

@Component({
  selector: 'app-role-in-project-details',
  imports: [MatSelectModule, FormsModule],
  templateUrl: './role-in-project-details.component.html',
  styleUrl: './role-in-project-details.component.css'
})
export class RoleInProjectDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) private data: { 
    roleInProject: RoleInProjectViewmodel,
    projectMap: Map<string, string>,
    userMap: Map<string, string>,
    roleMap: Map<string, string>
  },
  private dialogRef: MatDialogRef<RoleInProjectDetailsComponent>,
  private roleInProjectService: RoleInProjectDataService) {}

  roleInProject!: RoleInProjectViewmodel | null;
  projectMap!: Map<string, string>;
  selectedProject: string = "";
  userMap!: Map<string, string>;
  selectedUser: string = "";
  roleMap!: Map<string, string>;
  selectedRole: string = "";

  ngOnInit() {
    this.roleInProject = this.data.roleInProject;
    if(this.roleInProject != null) {
      this.selectedProject = this.roleInProject.projectId;
      this.selectedUser = this.roleInProject.userId;
      this.selectedRole = this.roleInProject.roleId;
    }
    this.projectMap = this.data.projectMap;
    this.userMap = this.data.userMap;
    this.roleMap = this.data.roleMap;
    console.log(this.projectMap);
  }

  saveRoleInProject() {
    if(this.roleInProject == null) {
      const period: PeriodDateString = {
        initDate: formatDate(new Date()),
        finalDate: formatDate(new Date())
      }
      const dto: CreateRoleInProject = {
        projectId: this.selectedProject,
        userId: this.selectedUser,
        period: period,
        roleId: this.selectedRole,
      }
      this.roleInProjectService.createRoleInProject(dto).subscribe({
        next: response => console.log('Success:', response),
        error: err => console.error('Error:', err)
      });
    } else {
      const dto: RoleInProject = {
        roleInProjectId: this.roleInProject.roleInProjectId,
        projectId: this.selectedProject,
        userId: this.selectedUser,
        period: this.roleInProject.period,
        roleId: this.selectedRole,
      }
      this.roleInProjectService.updateRoleInProject(dto).subscribe({
        next: response => console.log('Success:', response),
        error: err => console.error('Error:', err)
      });
    }

    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
