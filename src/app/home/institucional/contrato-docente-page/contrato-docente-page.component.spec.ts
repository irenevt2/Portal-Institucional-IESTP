import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoDocentePageComponent } from './contrato-docente-page.component';

describe('ContratoDocentePageComponent', () => {
  let component: ContratoDocentePageComponent;
  let fixture: ComponentFixture<ContratoDocentePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoDocentePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoDocentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
