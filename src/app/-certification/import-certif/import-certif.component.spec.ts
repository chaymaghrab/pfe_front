import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCertifComponent } from './import-certif.component';

describe('ImportCertifComponent', () => {
  let component: ImportCertifComponent;
  let fixture: ComponentFixture<ImportCertifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCertifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
