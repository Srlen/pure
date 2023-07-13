import { Test, TestingModule } from '@nestjs/testing';
import { WatchController } from './watch.controller';
import { WatchModule } from './watch.module';

describe('WatchController', () => {
  let controller: WatchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [WatchModule],
    }).compile();

    controller = module.get<WatchController>(WatchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
