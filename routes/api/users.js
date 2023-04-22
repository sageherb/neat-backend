const express = require("express");

const router = express.Router();

const usersController = require("../../controllers/usersController");

router.post("/signin", usersController.signin);

module.exports = router;
