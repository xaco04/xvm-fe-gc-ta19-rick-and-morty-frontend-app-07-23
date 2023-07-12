import { TestBed } from '@angular/core/testing';

import { CrudcharacterService } from './crudcharacter.service';

describe('CrudcharacterService', () => {
  let service: CrudcharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudcharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
