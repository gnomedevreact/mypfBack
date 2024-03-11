import { PrismaService } from "../db/prisma.service";
import { WorkDto, WorkDtoOptional } from "./dto/work.dto";
export declare class WorkService {
    private readonly PrismaService;
    constructor(PrismaService: PrismaService);
    create(dto: WorkDto): Promise<{
        message: string;
    }>;
    byId(id: string): Promise<{
        id: string;
        name: string;
        images: string[];
        tags: string[];
        goal: string;
        conclusion: string;
    }>;
    getAll(): Promise<{
        id: string;
        name: string;
        images: string[];
        tags: string[];
        goal: string;
        conclusion: string;
    }[]>;
    update(dto: WorkDtoOptional, id: string): Promise<{
        message: string;
    }>;
}
