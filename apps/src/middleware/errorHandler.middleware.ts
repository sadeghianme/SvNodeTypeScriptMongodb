import { Request, Response, NextFunction } from 'express';
import { LogManagementService } from '../log-management/logManagement.service';

export const errorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
    const logService = new LogManagementService();
    console.error("middleware detected an error!")
    const errorDetails = {
        systemPath: req.path,
        errorCode: err.status || 500,
        stacktraceText: err.stack || 'No stack trace available',
    };

    // Log the error in the database
    await logService.createLogError(errorDetails);

    // Respond to the client
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'An unknown error occurred',
        },
    });
};
