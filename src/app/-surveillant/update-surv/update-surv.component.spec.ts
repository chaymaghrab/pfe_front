import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSurvComponent } from './update-surv.component';

describe('UpdateSurvComponent', () => {
  let component: UpdateSurvComponent;
  let fixture: ComponentFixture<UpdateSurvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSurvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSurvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
