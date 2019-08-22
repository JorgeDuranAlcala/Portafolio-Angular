import { TestBed } from '@angular/core/testing';

import { InfoPagesService } from './info-pages.service';

describe('InfoPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoPagesService = TestBed.get(InfoPagesService);
    expect(service).toBeTruthy();
  });
});
