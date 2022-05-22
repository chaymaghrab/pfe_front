import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCertifComponent } from './add-certif.component';

describe('AddCertifComponent', () => {
  let component: AddCertifComponent;
  let fixture: ComponentFixture<AddCertifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCertifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
