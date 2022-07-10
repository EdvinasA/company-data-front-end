import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAsCardBaseComponent } from './product-as-card-base.component';

describe('ProductAsCardBaseComponent', () => {
  let component: ProductAsCardBaseComponent;
  let fixture: ComponentFixture<ProductAsCardBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAsCardBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAsCardBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
