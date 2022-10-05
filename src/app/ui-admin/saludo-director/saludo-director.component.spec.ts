import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoDirectorComponent } from './saludo-director.component';

describe('SaludoDirectorComponent', () => {
  let component: SaludoDirectorComponent;
  let fixture: ComponentFixture<SaludoDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludoDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
