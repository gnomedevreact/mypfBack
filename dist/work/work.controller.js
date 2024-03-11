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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkController = void 0;
const common_1 = require("@nestjs/common");
const work_dto_1 = require("./dto/work.dto");
const work_service_1 = require("./work.service");
let WorkController = class WorkController {
    constructor(WorkService) {
        this.WorkService = WorkService;
    }
    async create(dto) {
        return this.WorkService.create(dto);
    }
    async getAll() {
        return this.WorkService.getAll();
    }
    async byId(id) {
        return this.WorkService.byId(id);
    }
    async update(dto, id) {
        return this.WorkService.update(dto, id);
    }
};
exports.WorkController = WorkController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [work_dto_1.WorkDto]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("get-all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("by-id/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "byId", null);
__decorate([
    (0, common_1.Put)("update/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [work_dto_1.WorkDtoOptional, String]),
    __metadata("design:returntype", Promise)
], WorkController.prototype, "update", null);
exports.WorkController = WorkController = __decorate([
    (0, common_1.Controller)("work"),
    __metadata("design:paramtypes", [work_service_1.WorkService])
], WorkController);
//# sourceMappingURL=work.controller.js.map