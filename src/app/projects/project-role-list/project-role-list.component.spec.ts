import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRoleListComponent } from './project-role-list.component';

describe('ProjectRoleListComponent', () => {
  let component: ProjectRoleListComponent;
  let fixture: ComponentFixture<ProjectRoleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectRoleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
