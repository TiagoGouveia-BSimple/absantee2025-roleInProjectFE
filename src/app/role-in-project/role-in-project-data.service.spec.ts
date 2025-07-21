import { TestBed } from '@angular/core/testing';

import { RoleInProjectDataService } from './role-in-project-data.service';

describe('RoleInProjectDataService', () => {
  let service: RoleInProjectDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleInProjectDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
