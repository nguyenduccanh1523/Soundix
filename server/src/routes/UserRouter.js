const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/create", UserController.createUser);
router.post("/sign-in", UserController.loginUser);

module.exports = router;