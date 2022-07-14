import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAbmAlumnosComponent } from './forms-abm-alumnos.component';

describe('FormsAbmAlumnosComponent', () => {
  let component: FormsAbmAlumnosComponent;
  let fixture: ComponentFixture<FormsAbmAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAbmAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAbmAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
