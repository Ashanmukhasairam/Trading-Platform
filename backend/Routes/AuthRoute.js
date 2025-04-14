// /backend/Routes/AuthRoute.js
const express = require("express");
const router = express.Router();

const { Signup, Login } = require("../Controllers/AuthController");

router.post("/signup", Signup);
router.post("/login", Login); // ✅ This is what you're missing

module.exports = router;
