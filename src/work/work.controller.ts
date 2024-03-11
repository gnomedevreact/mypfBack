import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";

import { WorkDto, WorkDtoOptional } from "./dto/work.dto";
import { WorkService } from "./work.service";

@Controller("work")
export class WorkController {
  constructor(private readonly WorkService: WorkService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post("create")
  async create(@Body() dto: WorkDto) {
    return this.WorkService.create(dto);
  }

  @Get("get-all")
  async getAll() {
    return this.WorkService.getAll();
  }

  @Get("by-id/:id")
  async byId(@Param("id") id: string) {
    return this.WorkService.byId(id);
  }

  @Put("update/:id")
  async update(@Body() dto: WorkDtoOptional, @Param("id") id: string) {
    return this.WorkService.update(dto, id);
  }
}
