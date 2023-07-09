import { Controller, Get } from '@nestjs/common';
import { WatchService } from './watch.service';

@Controller('watch')
export class WatchController {
    constructor(private watch: WatchService) {}
  @Get()
  async getWatches() {
    return await this.watch.getWatches()
  }

}
