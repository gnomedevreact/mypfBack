import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "../db/prisma.service";
import { AuthDto } from "./dto/auth.dto";
export declare class AuthService {
    private readonly PrismaService;
    private readonly JwtService;
    constructor(PrismaService: PrismaService, JwtService: JwtService);
    register(dto: AuthDto): Promise<{
        user: {
            id: string;
            email: string;
            password: string;
        };
        accessToken: string;
    }>;
    login(dto: AuthDto): Promise<{
        user: {
            id: string;
            email: string;
            password: string;
        };
        accessToken: string;
    }>;
    generateToken(id: string): Promise<{
        accessToken: string;
    }>;
}
