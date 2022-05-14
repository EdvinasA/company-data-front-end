import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDataListComponent } from './company-data-list.component';

describe('CompanyDataListComponent', () => {
  let component: CompanyDataListComponent;
  let fixture: ComponentFixture<CompanyDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
