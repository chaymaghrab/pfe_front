import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCertifComponent } from './update-certif.component';

describe('UpdateCertifComponent', () => {
  let component: UpdateCertifComponent;
  let fixture: ComponentFixture<UpdateCertifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCertifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
