import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaPartesPageComponent } from './mesa-partes-page.component';

describe('MesaPartesPageComponent', () => {
  let component: MesaPartesPageComponent;
  let fixture: ComponentFixture<MesaPartesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaPartesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaPartesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
