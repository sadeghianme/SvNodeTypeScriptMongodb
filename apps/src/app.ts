// @ts-ignore
import express, { Request, Response , Application } from 'express';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { errorHandler } from './middleware/errorHandler.middleware';
import {swaggerSpec} from "./swaggerDef";
import * as swaggerUi from 'swagger-ui-express';
import {expressjwt} from 'express-jwt';

// Initialize modules
const authModule = new AuthModule();
const userModule = new UserModule();

const app: Application = express();

// Middlewares
app.use(express.json());

if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not set. Please set it in the .env file.");
}

app.use(expressjwt({
    secret: process.env.JWT_SECRET!,
    algorithms: ['HS256'] })
    .unless({      // No JWT required for these routes
        path: [
            '/auth/login',
            '/auth/register'
        ]
    }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/auth', authModule.router);
app.use('/user', userModule.router);

// Error handling middleware
app.use(errorHandler);

// Root route
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

export default app;
