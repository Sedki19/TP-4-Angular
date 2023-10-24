import { TestBed } from '@angular/core/testing';

import { pcService } from './pc.service';

describe('pcService', () => {
  let service: pcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(pcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
