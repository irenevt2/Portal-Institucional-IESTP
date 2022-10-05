import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionDocentePageComponent } from './renovacion-docente-page.component';

describe('RenovacionDocentePageComponent', () => {
  let component: RenovacionDocentePageComponent;
  let fixture: ComponentFixture<RenovacionDocentePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenovacionDocentePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovacionDocentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
