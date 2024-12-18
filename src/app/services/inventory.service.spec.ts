import { TestBed } from '@angular/core/testing';

import { InventoryService } from './inventory.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('InventoryService', () => {
  let service: InventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(InventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
