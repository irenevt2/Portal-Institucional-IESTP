import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatotoriasPageComponent } from './convocatotorias-page.component';

describe('ConvocatotoriasPageComponent', () => {
  let component: ConvocatotoriasPageComponent;
  let fixture: ComponentFixture<ConvocatotoriasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocatotoriasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatotoriasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
