import { TestBed } from '@angular/core/testing';

import { ListerUtilisateurService } from './lister-utilisateur.service';

describe('ListerUtilisateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListerUtilisateurService = TestBed.get(ListerUtilisateurService);
    expect(service).toBeTruthy();
  });
});
