import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroReclamacionesPageComponent } from './libro-reclamaciones-page.component';

describe('LibroReclamacionesPageComponent', () => {
  let component: LibroReclamacionesPageComponent;
  let fixture: ComponentFixture<LibroReclamacionesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroReclamacionesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroReclamacionesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
