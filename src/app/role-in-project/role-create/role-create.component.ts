import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RoleDataService } from '../role-data.service';

@Component({
  selector: 'app-role-create',
  imports: [FormsModule],
  templateUrl: './role-create.component.html',
  styleUrl: './role-create.component.css'
})
export class RoleCreateComponent {
  description: string = '';

  constructor(
    private dialogRef: MatDialogRef<RoleCreateComponent>,
    private roleService: RoleDataService) { }
  
  saveRole() {
    this.roleService.createRole(this.description).subscribe({
      error: (err) => {
        alert('Error loading data');
        console.error('Error loading data', err);
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
