import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurismoPageComponent } from './turismo-page.component';

describe('TurismoPageComponent', () => {
  let component: TurismoPageComponent;
  let fixture: ComponentFixture<TurismoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurismoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurismoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
