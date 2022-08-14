import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalFromLocationComponent } from './withdrawal-from-location.component';

describe('WithdrawalFromLocationComponent', () => {
  let component: WithdrawalFromLocationComponent;
  let fixture: ComponentFixture<WithdrawalFromLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawalFromLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalFromLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
