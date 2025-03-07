const express = require("express");
const router = express.Router();
const userRoute = require("./user");
const accountRoute = require("./accountRoute");

router.use("/user", userRoute);
router.use("/account", accountRoute);

module.exports = router;