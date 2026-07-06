import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSchool } from './after-school';

describe('AfterSchool', () => {
  let component: AfterSchool;
  let fixture: ComponentFixture<AfterSchool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterSchool],
    }).compileComponents();

    fixture = TestBed.createComponent(AfterSchool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
