import { TestBed } from '@angular/core/testing';

import { ViewedItemsService } from './viewed-items.service';

describe('ViewedItemsService', () => {
  let service: ViewedItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewedItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
