import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayThreeComponent } from './pay-three.component';

describe('PayThreeComponent', () => {
  let component: PayThreeComponent;
  let fixture: ComponentFixture<PayThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayThreeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
