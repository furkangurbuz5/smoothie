import { TestBed } from '@angular/core/testing';

import { DummyJsonClient } from './dummy-json-client';

describe('DummyJsonClient', () => {
  let service: DummyJsonClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyJsonClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
