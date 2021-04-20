/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SecuritySignService } from './securitySign.service';

describe('Service: SecuritySign', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecuritySignService]
    });
  });

  it('should ...', inject([SecuritySignService], (service: SecuritySignService) => {
    expect(service).toBeTruthy();
  }));
});
