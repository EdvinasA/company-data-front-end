import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateWishlistDialogComponent } from './create-wishlist-dialog.component';

describe('CreateWishlistDialogComponent', () => {
  let component: CreateWishlistDialogComponent;
  let fixture: ComponentFixture<CreateWishlistDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateWishlistDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWishlistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
