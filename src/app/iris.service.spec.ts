import { TestBed, inject } from '@angular/core/testing';

import { IrisService } from './iris.service';

describe('IrisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IrisService]
    });
  });

  it('should be created', inject([IrisService], (service: IrisService) => {
    expect(service).toBeTruthy();
  }));
});
