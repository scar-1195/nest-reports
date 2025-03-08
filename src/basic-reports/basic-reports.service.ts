import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(BasicReportsService.name);

  async onModuleInit() {
    await this.$connect();
    this.logger.log('DB connection success');
  }

  async hello() {
    return this.employees.findFirst();
  }
}
