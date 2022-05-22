import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCertifComponent } from './list-certif.component';

describe('ListCertifComponent', () => {
  let component: ListCertifComponent;
  let fixture: ComponentFixture<ListCertifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCertifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
