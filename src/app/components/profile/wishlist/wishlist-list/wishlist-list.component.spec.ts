import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WishlistListComponent } from './wislist-list.component';

describe('WislistListComponent', () => {
  let component: WishlistListComponent;
  let fixture: ComponentFixture<WishlistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishlistListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
