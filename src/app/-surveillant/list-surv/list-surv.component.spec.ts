import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSurvComponent } from './list-surv.component';

describe('ListSurvComponent', () => {
  let component: ListSurvComponent;
  let fixture: ComponentFixture<ListSurvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSurvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSurvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
