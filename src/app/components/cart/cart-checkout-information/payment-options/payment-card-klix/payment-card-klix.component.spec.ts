import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentCardKlixComponent } from './payment-card-klix.component';

describe('PaymentCardKlixComponent', () => {
  let component: PaymentCardKlixComponent;
  let fixture: ComponentFixture<PaymentCardKlixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentCardKlixComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCardKlixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
