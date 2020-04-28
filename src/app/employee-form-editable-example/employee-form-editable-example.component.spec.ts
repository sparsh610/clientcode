import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormEditableExampleComponent } from './employee-form-editable-example.component';

describe('EmployeeFormEditableExampleComponent', () => {
  let component: EmployeeFormEditableExampleComponent;
  let fixture: ComponentFixture<EmployeeFormEditableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFormEditableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormEditableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
