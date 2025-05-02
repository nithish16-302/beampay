import { TestBed } from '@angular/core/testing';

import { BeampayPluginService } from './beampay-plugin.service';

describe('BeampayPluginService', () => {
  let service: BeampayPluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeampayPluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
