const express = require("express");

const router = express.Router();

router.use("/users", require("./users"));
router.use("/users/:userId/memos", require("./memos"));

module.exports = router;
