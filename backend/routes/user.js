const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User } = require("../db/db")
const jwt = require("jsonwebtoken");
const { authmiddleware } = require("../middleware/middleware");
require("dotenv").config()
const jwttoken = process.env.JWT_TOKEN;

const signupBody = zod.object({
    email: zod.string().email(),
    password: zod.string().min(3).max(50),
    firstName: zod.string().min(3),
    lastName: zod.string().min(3)
});

const signinBody = zod.object({
    email: zod.string().email(),
	password: zod.string().min(3).max(50),
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
});

router.post("/signup", async (req, res) => {
    try {
        const { success } = signupBody.safeParse(req.body);
        const body = req.body;

        if(!success) {
            return res.status(411).json({
                message: "Invalid request body"
            });
        }

        const existingUser = await User.findOne({
            email: body.email
        });

        if(existingUser) {
            return res.status(400).json({
                message: "User already exists!!"
            });
        }

        const newUser = await User.create({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
        const token = jwt.sign({
            userid: newUser._id
        }, jwttoken);

        res.json({
            message: "User created successfully",
            token: token
        })
    } catch(error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

router.post("/signin", async (req, res) => {
    try {
        const { success } = signinBody.safeParse(req.body);

        if(!success) {
            return res.status(411).json({
                message: "Incorrect inputs"
            });
        }
        const { email, password } = req.body;

        if(!email || !password) {
            res.status(400).json({
                message: "Please provide all creds!!"
            });
        }

        const isUser = await User.findOne({
            email,
            password
        });

        if(!isUser) {
            return res.status(400).json({
                message: "User not found!"
            });
        }

        const token = jwt.sign({
            userid: isUser._id
        }, jwttoken);

        res.status(200).json({
            message: "success",
            token: token
        });

    } catch(error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
})

router.put("/update",authmiddleware, async (req, res) => {
    try {
        const { success } = updateBody.safeParse(req.body);

        if(!success) {
            return res.status(411).json({
                message: "Incorrect inputs"
            });
        }

        const userid = req.userid;

        const updateUser = await User.updateOne({
            _id: userid
        }, req.body);

        if(updateUser) {
            return res.status(200).json({
                message: "Updated successfully!!"
            });
        } else {
            return res.status(200).json({
                message: "Please retry after sometime"
            });
        }

    } catch(error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
})

router.get("/bulk", async (req, res) => {
    try {
        const search = req.query.filter || "";

        const users = await User.findOne({
            $or: [{
                firstName: {
                    "$regex": search
                }
            }, {
                lastName: {
                    "$regex": search
                }
            }]
        });

        res.status(200).json({
            user: users.map(user => ({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        });

    } catch(error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
})

module.exports = router;