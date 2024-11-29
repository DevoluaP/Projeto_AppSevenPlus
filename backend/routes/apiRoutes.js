const express = require("express");
const userRoutes = require("./userRoutes.js");
const privateRoutes = require("./privateRoutes.js");

const router = express.Router();

router.use("/user", userRoutes);
router.use("/private-route", privateRoutes);

module.exports = router;