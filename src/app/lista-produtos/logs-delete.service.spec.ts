import { TestBed } from '@angular/core/testing';

import { LogsDeleteService } from './logs-delete.service';

describe('LogsDeleteService', () => {
  let service: LogsDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogsDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
