import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBadgesComponent } from './material-badges.component';

describe('MaterialBadgesComponent', () => {
  let component: MaterialBadgesComponent;
  let fixture: ComponentFixture<MaterialBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
