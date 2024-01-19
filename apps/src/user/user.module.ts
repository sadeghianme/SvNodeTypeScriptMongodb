
import { Router } from 'express';
import { UserController } from './user.controller';
import { UserService } from './user.service';

export class UserModule {
    public router: Router;
    private userController: UserController;
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
        this.userController = new UserController(this.userService);
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get('/:id', this.userController.getUserById);
        this.router.post('/create', this.userController.createUser);
        this.router.put('/update', this.userController.updateUser);
        // ...other user routes
    }
}
