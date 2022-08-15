import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCheckoutAcceptFormComponent } from './cart-checkout-accept-form.component';

describe('CartCheckoutAcceptFormComponent', () => {
  let component: CartCheckoutAcceptFormComponent;
  let fixture: ComponentFixture<CartCheckoutAcceptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCheckoutAcceptFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCheckoutAcceptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
