"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const argon = require("argon2");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../db/prisma.service");
let AuthService = class AuthService {
    constructor(PrismaService, JwtService) {
        this.PrismaService = PrismaService;
        this.JwtService = JwtService;
    }
    async register(dto) {
        const isExist = await this.PrismaService.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (isExist) {
            throw new common_1.BadRequestException("user has already existed");
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
    async login(dto) {
        const user = await this.PrismaService.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException("user wasnt found");
        }
        const isValidPassword = await argon.verify(user.password, dto.password);
        if (!isValidPassword) {
            throw new common_1.BadRequestException("invalid password");
        }
        const { accessToken } = await this.generateToken(user.id);
        return {
            user,
            accessToken,
        };
    }
    async generateToken(id) {
        const data = { id };
        const accessToken = await this.JwtService.signAsync(data, {
            expiresIn: "15d",
        });
        return { accessToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map