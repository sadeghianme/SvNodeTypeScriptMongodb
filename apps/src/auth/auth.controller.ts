// src/auth/auth.controller.ts

import { Request, Response } from 'express';
import { AuthService } from './auth.service';

export class AuthController {
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    // Handler to respond to a request to get a user by ID
    getToken = async (req: Request, res: Response) => {
        try {
            const token = await this.authService.getToken();
            if (!token) {
                res.status(404).send({ message: 'User not found' });
                return;
            }
            res.status(200).send(token);
        } catch (error: any) {
            res.status(500).send({ message: error.message });
        }
    };

    // Add other handlers as needed for your application...
}
