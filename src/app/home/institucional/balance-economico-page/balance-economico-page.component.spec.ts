import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceEconomicoPageComponent } from './balance-economico-page.component';

describe('BalanceEconomicoPageComponent', () => {
  let component: BalanceEconomicoPageComponent;
  let fixture: ComponentFixture<BalanceEconomicoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceEconomicoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceEconomicoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
