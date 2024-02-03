import { Router } from 'express';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

export class AuthModule {
    public router: Router;
    private authController: AuthController;
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
        this.authController = new AuthController(this.authService);
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get('/', this.authController.getToken);
        this.router.get('/getTokenInfo', this.authController.getTokenInfo);
        this.router.post('/login', this.authController.login);
        this.router.post('/register', this.authController.register);
    }
}
