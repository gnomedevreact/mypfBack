import { Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "../db/prisma.service";
import { WorkDto, WorkDtoOptional } from "./dto/work.dto";

@Injectable()
export class WorkService {
  constructor(private readonly PrismaService: PrismaService) {}

  async create(dto: WorkDto) {
    try {
      await this.PrismaService.work.create({ data: dto });

      return {
        message: "Work post was successfully created",
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  async byId(id: string) {
    const work = await this.PrismaService.work.findUnique({
      where: {
        id,
      },
    });

    if (!work) throw new NotFoundException("Work wasnt found");

    return work;
  }

  async getAll() {
    return this.PrismaService.work.findMany();
  }

  async update(dto: WorkDtoOptional, id: string) {
    await this.byId(id);

    try {
      await this.PrismaService.work.update({
        where: {
          id,
        },
        data: dto,
      });

      return {
        message: "Work was successfully updated",
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
