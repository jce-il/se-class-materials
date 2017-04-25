/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyserviceService } from './myservice.service';

describe('MyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyserviceService]
    });
  });

  it('should ...', inject([MyserviceService], (service: MyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
