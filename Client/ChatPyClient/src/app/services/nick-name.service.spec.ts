import { TestBed } from '@angular/core/testing';

import { NickNameService } from './nick-name.service';

describe('NickNameService', () => {
  let service: NickNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NickNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
