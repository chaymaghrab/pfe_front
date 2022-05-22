import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterCertifComponent } from './affecter-certif.component';

describe('AffecterCertifComponent', () => {
  let component: AffecterCertifComponent;
  let fixture: ComponentFixture<AffecterCertifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffecterCertifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
