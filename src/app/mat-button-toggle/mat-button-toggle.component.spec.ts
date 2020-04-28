import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonToggleComponent } from './mat-button-toggle.component';

describe('MatButtonToggleComponent', () => {
  let component: MatButtonToggleComponent;
  let fixture: ComponentFixture<MatButtonToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatButtonToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
