import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgropecuariaPageComponent } from './agropecuaria-page.component';

describe('AgropecuariaPageComponent', () => {
  let component: AgropecuariaPageComponent;
  let fixture: ComponentFixture<AgropecuariaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgropecuariaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgropecuariaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
