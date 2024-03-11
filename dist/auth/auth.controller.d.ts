import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
export declare class AuthController {
    private readonly AuthService;
    constructor(AuthService: AuthService);
    register(dto: AuthDto): Promise<{
        user: {
            id: string;
            email: string;
            password: string;
        };
        accessToken: string;
    }>;
}
