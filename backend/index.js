const express = require("express");
const app = express.Router();
const rootRouter = require("./routes/rootRouter");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/v1", rootRouter);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});