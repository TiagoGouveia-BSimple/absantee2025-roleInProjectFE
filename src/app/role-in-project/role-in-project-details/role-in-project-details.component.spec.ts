import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleInProjectDetailsComponent } from './role-in-project-details.component';

describe('RoleInProjectDetailsComponent', () => {
  let component: RoleInProjectDetailsComponent;
  let fixture: ComponentFixture<RoleInProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleInProjectDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleInProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
