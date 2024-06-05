import { TestBed } from '@angular/core/testing';

import { MobatoService } from './mobato.service';

describe('MobatoService', () => {
  let service: MobatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
