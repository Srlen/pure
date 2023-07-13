import { Test, TestingModule } from '@nestjs/testing';
import { WatchService } from './watch.service';
import { WatchModule } from './watch.module';

describe('WatchService', () => {
  let service: WatchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [WatchModule],
    }).compile();

    service = module.get<WatchService>(WatchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should be array', () => {
    expect(service.getWatches());
  });
});
