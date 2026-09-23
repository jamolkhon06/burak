import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose
        .connect(process.env.MONGO_URL as string, {})
        .then(data => {
            console.log("Successfully connected to MongoDB")
            const PORT = process.env.PORT ?? 3003;
        })
        .catch(err => console.error(`ERROR on connection to MongoDB: ${err}`))