import {UserService} from "../user/user.service";
import * as jwt from 'jsonwebtoken';

export class AuthService {
    private userService = new UserService();

    async validateUser(email: string, password: string): Promise<string | null> {
        // Use UserService to check if the user exists and the password is correct
        const user = await this.userService.findUserByEmail(email);
        if (user && await this.userService.comparePassword(password, user.password)) {
            // User exists and password is correct, create a token
            return this.createToken(user.id);
        }
        // If user does not exist or password is incorrect, return null
        return null;
    }

    async getToken() {
        // Here you would interact with your database to retrieve the user
        // For example, using a User model (if using an ORM like TypeORM or Sequelize)
        // const user = await UserModel.findById(userId);
        // return user;
        return 'get token'
    }

    async getTokenInfo(userId: string) {
        try {
            return await this.userService.getUserById(userId);
        } catch (error) {
            return null;
        }
    }

    async createToken(userId: string) {
        const payload = {
            sub: userId,  // The subject of the token, usually the user ID
            // ... any additional claims you wish to include in the token ...
        };
        const secret = process.env.JWT_SECRET || "@@@";
        const options = {
            expiresIn: '24h',  // Set the expiration time for the token
        };
        return jwt.sign(payload, secret, options);
    }

}
