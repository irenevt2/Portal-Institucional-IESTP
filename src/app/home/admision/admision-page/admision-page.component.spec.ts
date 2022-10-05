import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionPageComponent } from './admision-page.component';

describe('AdmisionPageComponent', () => {
  let component: AdmisionPageComponent;
  let fixture: ComponentFixture<AdmisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmisionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
