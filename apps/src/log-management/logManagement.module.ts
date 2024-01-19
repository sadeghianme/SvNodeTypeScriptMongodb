
import { Router } from 'express';
import { LogManagementController } from './logManagement.controller';
import { LogManagementService } from './logManagement.service';

export class LogManagementModule {
    public router: Router;
    private userController: LogManagementController;
    private userService: LogManagementService;

    constructor() {
        this.userService = new LogManagementService();
        this.userController = new LogManagementController(this.userService);
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
