const express = require("express");
const app = express();
const rootRouter = require("./routes/rootRouter");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
require("dotenv").config();

const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl)
    .then(() => {
        console.log("MongoDB connected successfully")
        const PORT = 3000;
        app.listen(PORT, function (err) {
            if (err) console.log(err);
            console.log("Server listening on PORT", PORT);
        });
    })
    .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/v1", rootRouter);