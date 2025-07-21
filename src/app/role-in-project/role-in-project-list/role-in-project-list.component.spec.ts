import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleInProjectListComponent } from './role-in-project-list.component';

describe('RoleInProjectListComponent', () => {
  let component: RoleInProjectListComponent;
  let fixture: ComponentFixture<RoleInProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleInProjectListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleInProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
