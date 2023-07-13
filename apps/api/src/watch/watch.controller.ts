import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WatchService } from './watch.service';
import {
  CreateWatchDto,
  DeleteWatchDto,
  UpdateWatchDto,
} from './dto/watch.dto';

@Controller('watch')
export class WatchController {
  constructor(private watch: WatchService) {}
  @Get()
  async getWatches() {
    return await this.watch.getWatches();
  }

  @Get(':id')
  async getWatch(@Param('id') id: string) {
    return await this.watch.getWatch({ id });
  }

  @Post()
  async create(@Body() { name, theme }: CreateWatchDto) {
    return await this.watch.createWatch({ name, theme });
  }

  @Put()
  async update(@Body() { name, theme, id }: UpdateWatchDto) {
    console.log(name, theme, id )
    return await this.watch.updateWatch({
      where: { id },
      data: { name, theme },
    });
  }

  @Delete()
  async remove(@Body() { id }: DeleteWatchDto) {
    console.log(id);
    return await this.watch.deleteWatch({ id });
  }
}
