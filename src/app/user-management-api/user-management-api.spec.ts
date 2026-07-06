import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementApi } from './user-management-api';

describe('UserManagementApi', () => {
  let component: UserManagementApi;
  let fixture: ComponentFixture<UserManagementApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManagementApi],
    }).compileComponents();

    fixture = TestBed.createComponent(UserManagementApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
