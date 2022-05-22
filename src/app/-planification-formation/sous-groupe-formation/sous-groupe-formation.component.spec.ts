import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousGroupeFormationComponent } from './sous-groupe-formation.component';

describe('SousGroupeFormationComponent', () => {
  let component: SousGroupeFormationComponent;
  let fixture: ComponentFixture<SousGroupeFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousGroupeFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousGroupeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
