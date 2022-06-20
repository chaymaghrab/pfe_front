import { TestBed } from '@angular/core/testing';

import { GroupeCertifService } from './groupe-certif.service';

describe('GroupeCertifService', () => {
  let service: GroupeCertifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeCertifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
