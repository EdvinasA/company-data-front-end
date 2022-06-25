import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListAsCardComponent } from './products-list-as-card.component';

describe('ProductsListAsCardComponent', () => {
  let component: ProductsListAsCardComponent;
  let fixture: ComponentFixture<ProductsListAsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListAsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListAsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
