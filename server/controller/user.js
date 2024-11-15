import User from "../model/User.js";

const newsignup = async (req, res) => {
    const { name, email, password, mobile, gender } = req.body;
    const user = new User({ name, email, password, mobile, gender });

    try {
        const savedUser  = await user.save();
        res.status(201).json({
            success: true,
            message: "UserRegistered Successfully'",
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

export { newsignup };