import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TableHotService } from './table-hot.service';

describe('TableHotService', () => {
  let httpTestingController: HttpTestingController;
  let service: TableHotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        TableHotService
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(TableHotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
