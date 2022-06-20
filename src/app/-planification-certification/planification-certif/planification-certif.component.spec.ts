import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationCertifComponent } from './planification-certif.component';

describe('PlanificationCertifComponent', () => {
  let component: PlanificationCertifComponent;
  let fixture: ComponentFixture<PlanificationCertifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificationCertifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificationCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
