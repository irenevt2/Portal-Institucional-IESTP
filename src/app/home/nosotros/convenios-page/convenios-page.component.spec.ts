import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveniosPageComponent } from './convenios-page.component';

describe('ConveniosPageComponent', () => {
  let component: ConveniosPageComponent;
  let fixture: ComponentFixture<ConveniosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConveniosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConveniosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
