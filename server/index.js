import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoute.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define Routes
app.use("/api", route);

// Connect to MongoDB and Start Server
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("DB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to DB:", error);

        // Optional: Exit the process if DB connection fails
        process.exit(1);
    });
