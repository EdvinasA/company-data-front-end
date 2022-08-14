import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryToHomeComponent } from './delivery-to-home.component';

describe('DeliveryToHomeComponent', () => {
  let component: DeliveryToHomeComponent;
  let fixture: ComponentFixture<DeliveryToHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryToHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryToHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
