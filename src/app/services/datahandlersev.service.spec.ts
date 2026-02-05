import { TestBed } from '@angular/core/testing';

import { DatahandlersevService } from './datahandlersev.service';

describe('DatahandlersevService', () => {
  let service: DatahandlersevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatahandlersevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
