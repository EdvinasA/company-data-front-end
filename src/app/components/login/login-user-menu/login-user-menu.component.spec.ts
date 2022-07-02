import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserMenuComponent } from './login-user-menu.component';

describe('LoginUserMenuComponent', () => {
  let component: LoginUserMenuComponent;
  let fixture: ComponentFixture<LoginUserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
