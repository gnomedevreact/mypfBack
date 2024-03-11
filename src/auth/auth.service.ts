import * as argon from "argon2";

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { PrismaService } from "../db/prisma.service";
import { AuthDto } from "./dto/auth.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly PrismaService: PrismaService,
    private readonly JwtService: JwtService
  ) {}

  async register(dto: AuthDto) {
    const isExist = await this.PrismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (isExist) {
      throw new BadRequestException("user has already existed");
    }

    const password = await argon.hash(dto.password);

    const user = await this.PrismaService.user.create({
      data: {
        email: dto.email,
        password,
      },
    });

    const { accessToken } = await this.generateToken(user.id);

    return {
      user,
      accessToken,
    };
  }

  async login(dto: AuthDto) {
    const user = await this.PrismaService.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) {
      throw new NotFoundException("user wasnt found");
    }

    const isValidPassword = await argon.verify(user.password, dto.password);

    if (!isValidPassword) {
      throw new BadRequestException("invalid password");
    }

    const { accessToken } = await this.generateToken(user.id);

    return {
      user,
      accessToken,
    };
  }

  async generateToken(id: string) {
    const data = { id };

    const accessToken = await this.JwtService.signAsync(data, {
      expiresIn: "15d",
    });

    return { accessToken };
  }
}
