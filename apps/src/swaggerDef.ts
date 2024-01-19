// @ts-ignore
import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API with Swagger',
        version: '1.0.0',
        description: 'This is a simple CRUD API application made with Express and documented with Swagger',
    },
    servers: [
        {
            url: 'http://localhost:3000', // Replace with your server's URL
            description: 'Local server',
        },
    ],
};

export const swaggerSpec = swaggerJSDoc({
    swaggerDefinition,
    apis: ['apps/doc/swagger/*.yaml'],
});

