import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEtudiantComponent } from './import-etudiant.component';

describe('ImportEtudiantComponent', () => {
  let component: ImportEtudiantComponent;
  let fixture: ComponentFixture<ImportEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
