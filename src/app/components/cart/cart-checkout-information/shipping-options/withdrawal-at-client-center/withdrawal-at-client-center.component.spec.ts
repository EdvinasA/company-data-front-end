import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalAtClientCenterComponent } from './withdrawal-at-client-center.component';

describe('WithdrawalAtClientCenterComponent', () => {
  let component: WithdrawalAtClientCenterComponent;
  let fixture: ComponentFixture<WithdrawalAtClientCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawalAtClientCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalAtClientCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
