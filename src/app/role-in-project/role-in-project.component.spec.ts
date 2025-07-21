import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleInProjectComponent } from './role-in-project.component';

describe('RoleInProjectComponent', () => {
  let component: RoleInProjectComponent;
  let fixture: ComponentFixture<RoleInProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleInProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleInProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
