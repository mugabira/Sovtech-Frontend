import { TestBed } from '@angular/core/testing';

import { RandomJokeServiceService } from './random-joke-service.service';

describe('RandomJokeServiceService', () => {
  let service: RandomJokeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomJokeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
