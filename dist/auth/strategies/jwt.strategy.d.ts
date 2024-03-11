import { Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../../db/prisma.service";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private ConfigService;
    private readonly PrismaService;
    constructor(ConfigService: ConfigService, PrismaService: PrismaService);
    validate({ id }: {
        id: string;
    }): Promise<{
        id: string;
        email: string;
        password: string;
    }>;
}
export {};
