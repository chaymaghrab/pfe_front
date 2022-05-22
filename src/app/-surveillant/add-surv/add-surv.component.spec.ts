import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurvComponent } from './add-surv.component';

describe('AddSurvComponent', () => {
  let component: AddSurvComponent;
  let fixture: ComponentFixture<AddSurvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSurvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSurvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
