import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeCertifComponent } from './groupe-certif.component';

describe('GroupeCertifComponent', () => {
  let component: GroupeCertifComponent;
  let fixture: ComponentFixture<GroupeCertifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeCertifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
