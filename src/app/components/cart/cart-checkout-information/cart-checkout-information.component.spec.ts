import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCheckoutInformationComponent } from './cart-checkout-information.component';

describe('CartCheckoutInformationComponent', () => {
  let component: CartCheckoutInformationComponent;
  let fixture: ComponentFixture<CartCheckoutInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartCheckoutInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCheckoutInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
