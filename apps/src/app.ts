// @ts-ignore
import express, { Request, Response , Application } from 'express';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { errorHandler } from './middleware/errorHandler.middleware';
import {swaggerSpec} from "./swaggerDef";
import * as swaggerUi from 'swagger-ui-express';

// Initialize modules
const authModule = new AuthModule();
const userModule = new UserModule();

const app: Application = express();

// Middlewares
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// console.log("22222", JSON.stringify(swaggerSpec, null, 2));

// Routes
app.use('/auth', authModule.router);
app.use('/user', userModule.router);

// Error handling middleware
app.use(errorHandler);

// Root route
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

// Export the app
export default app;
