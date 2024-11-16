import User from "../model/User.js";
import bcrypt from 'bcrypt'; // Import bcrypt

const newsignup = async (req, res) => {
    const { name, email, password, mobile, gender } = req.body;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const user = new User({ name, email, password: hashedPassword, mobile, gender });

    try {
        const savedUser  = await user.save();
        res.status(201).json({
            success: true,
            message: "User  Registered Successfully",
            data: savedUser 
        });
    } catch (error) {
        console.error("Error creating user:", error); // Log the error for debugging

        // Check if the error is due to duplicate email
        if (error.code === 11000) { // MongoDB duplicate key error code
            res.status(400).json({
                success: false,
                data: null,
                message: "User  already exists with this email"
            });
        } else {
            res.status(500).json({
                success: false,
                data: null,
                message: "An error occurred while creating the user"
            });
        }
    }
};

const loginuser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email: email });
        
        // Check if user exists and password matches
        if (user && await bcrypt.compare(password, user.password)) {
            res.status(200).json({
                success: true,
                message: "Login successfully!",
                data: user // Consider excluding sensitive data
            });
        } else {
            // If user not found or password doesn't match
            res.status(401).json({
                success: false,
                data: null,
                message: "Invalid email or password"
            });
        }
    } catch (error) {
        console.error("Error logging in user:", error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

export { newsignup, loginuser };