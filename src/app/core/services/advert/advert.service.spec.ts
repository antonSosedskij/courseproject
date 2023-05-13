import { TestBed } from '@angular/core/testing';

import { AdvertService } from './advert.service';
import { HttpClientModule } from '@angular/common/http';

describe('AdvertService', () => {
  let service: AdvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(AdvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
