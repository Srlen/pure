import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WatchModule } from './watch/watch.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [WatchModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
