import {NextFunction, Request, Response} from 'express';
import { AuthService } from './auth.service';
import {UserService} from "../user/user.service";

export class AuthController {
    private userService = new UserService();

    constructor(
        private authService: AuthService
    ) {}

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body;
            const token = await this.authService.validateUser(email, password);

            if (token) {
                res.status(200).send({ token });
            } else {
                res.status(401).send({ message: 'Invalid credentials' });
            }
        } catch (error: any) {
            next(error);
        }
    };


    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("register", req.body)
            const newUser = await this.userService.createUser(req.body);
            const token = await this.authService.createToken(newUser.id);
            res.status(201).json({ newUser });
        } catch (error: any) {
            next(error);
        }
    };

    getToken = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = await this.authService.getToken();
            if (!token) {
                res.status(404).send({ message: 'User not found' });
                return;
            }
            res.status(200).send(token);
        } catch (error: any) {
            next(error);
        }
    };

    getTokenInfo = async (req: Request | any, res: Response, next: NextFunction) => {
        try {
            const userPayload = req.auth;
            if (!userPayload) {
                return res.status(401).send('Unauthorized');
            }
            throw Error("hiiiiiiii")
            const userId = userPayload.sub;
            const userDetails = await this.authService.getTokenInfo(userId);
            res.json(userDetails);
        } catch (error) {
            next(error);
        }
    };

}
