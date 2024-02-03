
import * as dotenv from 'dotenv';
dotenv.config();
console.log(".env variables Loaded Successfully");

import app from './app';
import connectDB from '../config/mongoose.config';
import {initializeModels} from "./initializeModels";




const PORT = process.env.PORT || 8000;

// Async initialization
(async () => {
    try {
        // Connect to MongoDB
        await connectDB();

        // Initialize Mongoose models
        initializeModels();

        // Starting the server
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
})();