import {NextFunction, Request, Response} from 'express';
import { LogManagementService } from './logManagement.service';

export class LogManagementController {
    constructor(logManagementService: LogManagementService) {
    }

    getLogs = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.params.id;
            res.status(200).send("log");
        } catch (error: any) {
            next(error);
        }
    };

    getLogById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.params.id;
            res.status(200).send("log");
        } catch (error: any) {
            next(error);
        }
    };
}
