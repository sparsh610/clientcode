import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGridListComponent } from './material-grid-list.component';

describe('MaterialGridListComponent', () => {
  let component: MaterialGridListComponent;
  let fixture: ComponentFixture<MaterialGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
