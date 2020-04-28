import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSteppersComponent } from './material-steppers.component';

describe('MaterialSteppersComponent', () => {
  let component: MaterialSteppersComponent;
  let fixture: ComponentFixture<MaterialSteppersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialSteppersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSteppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
