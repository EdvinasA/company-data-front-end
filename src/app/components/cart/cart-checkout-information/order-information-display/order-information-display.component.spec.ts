import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInformationDisplayComponent } from './order-information-display.component';

describe('OrderInformationDisplayComponent', () => {
  let component: OrderInformationDisplayComponent;
  let fixture: ComponentFixture<OrderInformationDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderInformationDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInformationDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
