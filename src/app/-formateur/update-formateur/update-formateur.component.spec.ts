import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormateurComponent } from './update-formateur.component';

describe('UpdateFormateurComponent', () => {
  let component: UpdateFormateurComponent;
  let fixture: ComponentFixture<UpdateFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
