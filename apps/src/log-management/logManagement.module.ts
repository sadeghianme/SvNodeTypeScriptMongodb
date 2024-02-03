
import { Router } from 'express';
import { LogManagementController } from './logManagement.controller';
import { LogManagementService } from './logManagement.service';

export class LogManagementModule {
    public router: Router;
    private logManagementController: LogManagementController;
    private logManagementService: LogManagementService;

    constructor() {
        this.logManagementService = new LogManagementService();
        this.logManagementController = new LogManagementController(this.logManagementService);
        this.router = Router();
        this.routes();
    }

    private routes() {
        this.router.get('/:id', this.logManagementController.getLogs);
        this.router.put('/logs', this.logManagementController.getLogById);
        // ...other user routes
    }
}
