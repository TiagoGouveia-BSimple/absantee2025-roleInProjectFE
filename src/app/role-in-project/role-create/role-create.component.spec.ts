import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCreateComponent } from './role-create.component';
import { RoleDataService } from '../role-data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('RoleCreateComponent', () => {
  let component: RoleCreateComponent;
  let fixture: ComponentFixture<RoleCreateComponent>;
  let roleService: RoleDataService;
  let dialog: jasmine.SpyObj<MatDialogRef<RoleCreateComponent, any>>;

  beforeEach(async () => {
    roleService = jasmine.createSpyObj('RoleDataService', ['createRole']);
    dialog = jasmine.createSpyObj('MatDialogRef<RoleCreateComponent, any>', ['close']);

    await TestBed.configureTestingModule({
      imports: [RoleCreateComponent],
      providers: [
        { provide: RoleDataService, useValue: roleService },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: dialog },
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the input with empty string', () => {
    const inputElement = fixture.debugElement.query(By.css('#description')).nativeElement as HTMLInputElement;
    expect(inputElement.value).toBe('');
  });

  it('should call closeDialog when close button is clicked', () => {
    spyOn(component, 'closeDialog');

    const saveButton = fixture.debugElement.query(By.css('button')).nativeElement;
    saveButton.click();

    expect(component.closeDialog).toHaveBeenCalled();
  });

  it('should call saveRole when Save button is clicked', () => {
    spyOn(component, 'saveRole');

    const saveButton = fixture.debugElement.query(By.css('#save')).nativeElement;
    saveButton.click();

    expect(component.saveRole).toHaveBeenCalled();
  });

  it('should call roleService.createRole when Save button is clicked', () => {
    component.description = 'TestRole';

    spyOn(component, 'saveRole').and.callThrough();

    const saveButton = fixture.debugElement.query(By.css('#save')).nativeElement;
    saveButton.click();

    expect(component.saveRole).toHaveBeenCalled();
    expect(roleService.createRole).toHaveBeenCalledWith('TestRole');
  });
});
