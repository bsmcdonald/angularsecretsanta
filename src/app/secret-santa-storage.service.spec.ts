import { TestBed } from '@angular/core/testing';

import { SecretSantaStorageService } from './secret-santa-storage.service';

describe('SecretSantaStorageService', () => {
  let service: SecretSantaStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretSantaStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
