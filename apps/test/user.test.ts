// tests/user.test.ts

import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import request from 'supertest';
import app from '../src/app'; // Adjust the import path as per your project structure

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
    // Setup in-memory MongoDB server
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
});

afterAll(async () => {
    // Disconnect and stop in-memory MongoDB server
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('User API', () => {
    describe('POST /user/create', () => {
        it('should create a new user and return 201 status', async () => {
            const userData = {
                username: 'testuser',
                email: 'test@example.com',
                password: 'Password123'
            };

            const response = await request(app)
                .post('/user/create')
                .send(userData);

            expect(response.statusCode).toEqual(201);
            expect(response.body).toHaveProperty('username', userData.username);
            // Add more assertions as needed
        }, 5000);

        // Add more tests for different scenarios if needed
    });

    // Add tests for other user-related routes if needed
});
