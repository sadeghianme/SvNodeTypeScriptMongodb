
import {NextFunction, Request, Response} from 'express';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    getUserById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.params.id;
            const user = await this.userService.getUserById(userId);
            if (!user) {
                res.status(404).send({ message: 'User not found' });
                return;
            }
            res.status(200).send(user);
        } catch (error: any) {
            next(error);
        }
    };

    createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        console.log("Create User API")
        try {
            const createdUser = await this.userService.createUser(req.body);
            res.status(201).json(createdUser);
        } catch (error: any) {
            console.log("errrrr")
            next(error);
        }
    };

    updateUser = async (req: Request, res: Response, next: NextFunction) => {
        console.log("Update User API")
        try {
            const userId = req.params.id;
            const userData = req.body;
            const updatedUser = await this.userService.updateUser(userId, userData);
            res.status(200).send(updatedUser);
        } catch (error: any) {
            next(error);
        }
    };

}
