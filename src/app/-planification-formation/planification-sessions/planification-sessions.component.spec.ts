import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationSessionsComponent } from './planification-sessions.component';

describe('PlanificationSessionsComponent', () => {
  let component: PlanificationSessionsComponent;
  let fixture: ComponentFixture<PlanificationSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificationSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificationSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
