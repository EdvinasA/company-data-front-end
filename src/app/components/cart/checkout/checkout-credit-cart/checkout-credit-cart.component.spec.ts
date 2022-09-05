import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCreditCartComponent } from './checkout-credit-cart.component';

describe('CheckoutCreditCartComponent', () => {
  let component: CheckoutCreditCartComponent;
  let fixture: ComponentFixture<CheckoutCreditCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutCreditCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCreditCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
