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
exports.WorkService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../db/prisma.service");
let WorkService = class WorkService {
    constructor(PrismaService) {
        this.PrismaService = PrismaService;
    }
    async create(dto) {
        try {
            await this.PrismaService.work.create({ data: dto });
            return {
                message: "Work post was successfully created",
            };
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async byId(id) {
        const work = await this.PrismaService.work.findUnique({
            where: {
                id,
            },
        });
        if (!work)
            throw new common_1.NotFoundException("Work wasnt found");
        return work;
    }
    async getAll() {
        return this.PrismaService.work.findMany();
    }
    async update(dto, id) {
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
        }
        catch (err) {
            throw new Error(err);
        }
    }
};
exports.WorkService = WorkService;
exports.WorkService = WorkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WorkService);
//# sourceMappingURL=work.service.js.map