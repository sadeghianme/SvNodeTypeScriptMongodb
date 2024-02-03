// src/user/user.service.ts

import {CreateUserDto} from "./dto/user.dto";
import User from "./models/user.model";
import UserModel, {UserDocument} from "./models/user.model";
import * as bcrypt from 'bcrypt';
import {CommonService} from "../services/common.service";

export class UserService {
    private readonly saltRounds = 10;
    private commonService = new CommonService()
    constructor() {}

    async findUserByEmail(email: string): Promise<UserDocument | null> {
        return User.findOne({ email });
    }

    async getUserById(userId: string): Promise<UserDocument | null> {
        return UserModel.findById(userId);
    }

    async comparePassword(candidatePassword: string, userPassword: string): Promise<boolean> {
        return bcrypt.compare(candidatePassword, userPassword);
    }

    async createUser(createUserDto: CreateUserDto): Promise<UserDocument> {
        // Validate the Email
        if (!this.commonService.validateEmail(createUserDto.email)) {
            throw new Error('Email is not valid');
        }

        // Validate the password strength
        if (!this.commonService.validateStrongPassword(createUserDto.password)) {
            throw new Error('Password does not meet the strength requirements.');
        }

        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(this.saltRounds);
        const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

        // Replace the plain password with the hashed password
        const user = new User({
            ...createUserDto,
            password: hashedPassword,
        });

        await user.save();
        return user;
    }


    // Example of a service method to update a user by ID
    async updateUser(userId: string, userData: any) {
        // Here you would interact with your database to update the user
        // For example:
        // const user = await UserModel.findByIdAndUpdate(userId, userData, { new: true });
        // return user;
        return 'update user'
    }

}

