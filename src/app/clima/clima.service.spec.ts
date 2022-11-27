/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClimaService } from './clima.service';

describe('Service: Clima', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClimaService]
    });
  });

  it('should ...', inject([ClimaService], (service: ClimaService) => {
    expect(service).toBeTruthy();
  }));
});
