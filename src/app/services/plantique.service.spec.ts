import { TestBed } from '@angular/core/testing';

import { PlantiqueService } from './plantique.service';

describe('PlantiqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantiqueService = TestBed.get(PlantiqueService);
    expect(service).toBeTruthy();
  });
});
