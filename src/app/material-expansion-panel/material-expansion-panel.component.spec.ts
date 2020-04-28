import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExpansionPanelComponent } from './material-expansion-panel.component';

describe('MaterialExpansionPanelComponent', () => {
  let component: MaterialExpansionPanelComponent;
  let fixture: ComponentFixture<MaterialExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
