import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorInventoryApi } from './processor-inventory-api';

describe('ProcessorInventoryApi', () => {
  let component: ProcessorInventoryApi;
  let fixture: ComponentFixture<ProcessorInventoryApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessorInventoryApi],
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessorInventoryApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
