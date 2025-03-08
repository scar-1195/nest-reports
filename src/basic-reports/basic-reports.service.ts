import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getEmpoymentLetterReport, getHelloWorldReport } from 'src/reports';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  constructor(private readonly printerService: PrinterService) {
    super();
  }

  hello() {
    const docDefinition = getHelloWorldReport({
      name: 'Oscar Lopez',
    });

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }

  empoymentLetter() {
    const docDefinition = getEmpoymentLetterReport();

    const doc = this.printerService.createPdf(docDefinition);
    return doc;
  }
}
