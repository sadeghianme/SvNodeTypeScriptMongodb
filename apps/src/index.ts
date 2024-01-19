
import app from './app';
import dotenv from 'dotenv';
import connectDB from '../config/mongoose.config';
import {initializeModels} from "./initializeModels";

//For env File
dotenv.config();

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