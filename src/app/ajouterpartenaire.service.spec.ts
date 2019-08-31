import { TestBed } from '@angular/core/testing';

import { AjouterpartenaireService } from './ajouterpartenaire.service';

describe('AjouterpartenaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjouterpartenaireService = TestBed.get(AjouterpartenaireService);
    expect(service).toBeTruthy();
  });
});
