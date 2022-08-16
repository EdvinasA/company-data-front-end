import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayToCourierComponent } from './pay-to-courier.component';

describe('PayToCourierComponent', () => {
  let component: PayToCourierComponent;
  let fixture: ComponentFixture<PayToCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayToCourierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayToCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
