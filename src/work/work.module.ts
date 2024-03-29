import { PrismaService } from "src/db/prisma.service";

import { Module } from "@nestjs/common";

import { WorkController } from "./work.controller";
import { WorkService } from "./work.service";

@Module({
  controllers: [WorkController],
  providers: [WorkService, PrismaService],
})
export class WorkModule {}
