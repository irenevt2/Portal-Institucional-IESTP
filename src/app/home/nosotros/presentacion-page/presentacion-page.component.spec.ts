import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionPageComponent } from './presentacion-page.component';

describe('PresentacionPageComponent', () => {
  let component: PresentacionPageComponent;
  let fixture: ComponentFixture<PresentacionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
