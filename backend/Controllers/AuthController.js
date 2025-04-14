const UserModel = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup Controller
const Signup = async (req, res) => {
  try {
    console.log("👉 Incoming data:", req.body);

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      console.log("❗ Missing fields");
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      console.log("❌ User already exists");
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    console.log("✅ User registered successfully");
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    console.error("🔥 Error in Signup controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Login Controller
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("🔐 Login attempt for:", email);

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Now create the JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("✅ Login successful");
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("🔥 Error in Login controller:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { Signup, Login };
