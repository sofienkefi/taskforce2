import { TestBed } from '@angular/core/testing';

import { AutGaurdService } from './aut-gaurd.service';

describe('AutGaurdService', () => {
  let service: AutGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
