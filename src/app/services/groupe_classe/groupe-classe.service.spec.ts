import { TestBed } from '@angular/core/testing';

import { GroupeClasseService } from './groupe-classe.service';

describe('GroupeClasseService', () => {
  let service: GroupeClasseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeClasseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
