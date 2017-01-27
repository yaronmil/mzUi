/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SystemDataProviderService } from './system-data-provider.service';

describe('SystemDataProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemDataProviderService]
    });
  });

  it('should ...', inject([SystemDataProviderService], (service: SystemDataProviderService) => {
    expect(service).toBeTruthy();
  }));
});
