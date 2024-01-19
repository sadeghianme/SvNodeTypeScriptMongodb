// src/user/user.controller.ts

import { Request, Response } from 'express';
import { LogManagementService } from './logManagement.service';

export class LogManagementController {
    private userService: LogManagementService;

    constructor(userService: LogManagementService) {
        this.userService = userService;
    }

    // Handler to respond to a request to get a user by ID
    getUserById = async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            res.status(200).send("log");
        } catch (error: any) {
            res.status(500).send({ message: error.message });
        }
    };

    createUser = async (req: Request, res: Response) => {
        console.log("create")
        try {
            const createdUser = await this.userService.createUser(req.body);
            res.status(201).json(createdUser);
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    };
    // Handler to respond to a request to update a user by ID
    updateUser = async (req: Request, res: Response) => {
        console.log("updateeeeee")
        try {
            const userId = req.params.id;
            const userData = req.body;
            const updatedUser = await this.userService.updateUser(userId, userData);
            res.status(200).send(updatedUser);
        } catch (error: any) {
            res.status(500).send({ message: error.message });
        }
    };

    // Add other handlers as needed for your application...
}
