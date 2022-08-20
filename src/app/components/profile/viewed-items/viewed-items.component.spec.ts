import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewedItemsComponent } from './viewed-items.component';

describe('ViewedItemsComponent', () => {
  let component: ViewedItemsComponent;
  let fixture: ComponentFixture<ViewedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewedItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
