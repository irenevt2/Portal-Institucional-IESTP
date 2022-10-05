import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionVisionPageComponent } from './mision-vision-page.component';

describe('MisionVisionPageComponent', () => {
  let component: MisionVisionPageComponent;
  let fixture: ComponentFixture<MisionVisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisionVisionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisionVisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
