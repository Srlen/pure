import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Watch } from '@prisma/client';

@Injectable()
export class WatchService {
  constructor(private prisma: PrismaService) {}

  async getWatches(): Promise<Watch[]> {
    return await this.prisma.watch.findMany();
  }
  
  async createWatch(data: Prisma.WatchCreateInput): Promise<Watch> {
    return await this.prisma.watch.create({data})
  }

  async updateWatch(params: {
    where: Prisma.WatchWhereUniqueInput;
    data: Prisma.WatchUpdateInput;
  }): Promise<Watch> {
    const { data, where } = params;
    return this.prisma.watch.update({
      data,
      where,
    });
  }

  async deleteWatch(where: Prisma.WatchWhereUniqueInput): Promise<Watch> {
    return await this.prisma.watch.delete({where})
  }
}
