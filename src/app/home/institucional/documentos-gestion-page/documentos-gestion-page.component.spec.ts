import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosGestionPageComponent } from './documentos-gestion-page.component';

describe('DocumentosGestionPageComponent', () => {
  let component: DocumentosGestionPageComponent;
  let fixture: ComponentFixture<DocumentosGestionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosGestionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosGestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
