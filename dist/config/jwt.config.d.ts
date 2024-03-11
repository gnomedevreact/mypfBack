import { ConfigService } from "@nestjs/config";
export declare const jwtConfig: (configService: ConfigService) => Promise<{
    secret: any;
}>;
