import { TestBed } from '@angular/core/testing';

import { NsfavouriteMoviesService } from './nsfavourite-movies.service';

describe('NsfavouriteMoviesService', () => {
  let service: NsfavouriteMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NsfavouriteMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
