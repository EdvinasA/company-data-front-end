import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCheckoutHeaderComponent } from './cart-checkout-header.component';

describe('CartCheckoutHeaderComponent', () => {
  let component: CartCheckoutHeaderComponent;
  let fixture: ComponentFixture<CartCheckoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCheckoutHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCheckoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
