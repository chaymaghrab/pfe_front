import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSousGroupeFormaComponent } from './auto-sous-groupe-forma.component';

describe('AutoSousGroupeFormaComponent', () => {
  let component: AutoSousGroupeFormaComponent;
  let fixture: ComponentFixture<AutoSousGroupeFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSousGroupeFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSousGroupeFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
