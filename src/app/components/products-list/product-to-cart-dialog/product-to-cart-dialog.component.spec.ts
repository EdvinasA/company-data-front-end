import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductToCartDialogComponent } from './product-to-cart-dialog.component';

describe('ProductToCartDialogComponent', () => {
  let component: ProductToCartDialogComponent;
  let fixture: ComponentFixture<ProductToCartDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductToCartDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductToCartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
