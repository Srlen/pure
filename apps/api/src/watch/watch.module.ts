import { Module } from '@nestjs/common';
import { WatchController } from './watch.controller';
import { WatchService } from './watch.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [WatchController],
  providers: [WatchService],
  imports: [PrismaModule],
  exports: [WatchModule]
})
export class WatchModule {}
