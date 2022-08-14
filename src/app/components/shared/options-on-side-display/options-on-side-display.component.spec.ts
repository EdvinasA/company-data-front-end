import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsOnSideDisplayComponent } from './options-on-side-display.component';

describe('OptionsOnSideDisplayComponent', () => {
  let component: OptionsOnSideDisplayComponent;
  let fixture: ComponentFixture<OptionsOnSideDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsOnSideDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsOnSideDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
