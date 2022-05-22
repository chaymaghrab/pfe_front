import { TestBed } from '@angular/core/testing';

import { GroupeFormationService } from './groupe-formation.service';

describe('GroupeFormationService', () => {
  let service: GroupeFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
