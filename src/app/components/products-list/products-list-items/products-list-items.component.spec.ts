import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListItemsComponent } from './products-list-items.component';

describe('ProductsListItemsComponent', () => {
  let component: ProductsListItemsComponent;
  let fixture: ComponentFixture<ProductsListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
