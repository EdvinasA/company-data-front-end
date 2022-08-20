import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayUserInformationComponent } from './display-user-information.component';

describe('DisplayUserInformationComponent', () => {
  let component: DisplayUserInformationComponent;
  let fixture: ComponentFixture<DisplayUserInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayUserInformationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
