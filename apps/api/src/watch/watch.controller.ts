import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WatchService } from './watch.service';
import { CreateWatchDto, UpdateWatchDto } from './dto/watch.dto';

@Controller('watch')
export class WatchController {
    constructor(private watch: WatchService) {}
  @Get()
  async getWatches() {
    return await this.watch.getWatches()
  }

  @Get(":id")
  async getWatch(@Param("id") id: string) {
   return await this.watch.getWatch({id})
  }

  @Post()
  async create(@Body() {name, theme}: CreateWatchDto) {
    return await this.watch.createWatch({name, theme})
  }

  @Put()
  async update(@Body() {name, theme, id} : UpdateWatchDto) {
    return await this.watch.updateWatch({where: {id}, data: {name, theme}})
  }

  @Delete(":id")
  async remove(@Param('id') id: string ) {
    return await this.watch.deleteWatch({id})
  }
}
