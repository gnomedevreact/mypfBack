import { WorkDto, WorkDtoOptional } from "./dto/work.dto";
import { WorkService } from "./work.service";
export declare class WorkController {
    private readonly WorkService;
    constructor(WorkService: WorkService);
    create(dto: WorkDto): Promise<{
        message: string;
    }>;
    getAll(): Promise<{
        id: string;
        name: string;
        images: string[];
        tags: string[];
        goal: string;
        conclusion: string;
    }[]>;
    byId(id: string): Promise<{
        id: string;
        name: string;
        images: string[];
        tags: string[];
        goal: string;
        conclusion: string;
    }>;
    update(dto: WorkDtoOptional, id: string): Promise<{
        message: string;
    }>;
}
