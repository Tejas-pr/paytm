const express = require("express");
const { authmiddleware } = require("../middleware/middleware");
const { Account } = require("../db/db");
const { default: mongoose } = require("mongoose");
const router = express.Router();
require("dotenv").config();
const { z } = require("zod");

const accountValid = z.object({
    amount: z.number().positive("Amount must be a positive number"),
    to: z.string().min(1, "Recipient user ID is required")
});

router.get("/balance", authmiddleware, async (req, res) => {
    try {
        const userId = req.userid;
        console.log(userId);

        const account = await Account.findOne({ userId });

        if (!account) {
            return res.status(404).json({ message: "Account not found" });
        }

        res.json({ balance: account.balance });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/transfer", authmiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        accountValid.parse(req.body);

        const {amount, to} = req.body;

        const userId = req.userId;

        if (userId === to) {
            await session.abortTransaction();
            throw new Error("You cannot transfer money to yourself");
        }

        const account = await Account.findOne({
            userId
        }).session(session);

        if(account.balance < amount) {
            await session.abortTransaction();
            return res.status(404).json({
                message: "Insufficient balance"
            });
        }

        const isToAccount = await Account.findOne({
            userId: to
        }).session(session);

        if(!isToAccount) {
            await session.abortTransaction();
            return res.status(404).json({
                message: "Invalid userId"
            });
        }

        await Account.updateOne({
            userId
        }, {
            $inc: {
                balance: -amount
            }
        }).session(session);

        await Account.updateOne({
            userId: to
        }, {
            $inc: {
                balance: amount
            }
        }).session(session);

        await session.commitTransaction();

        res.status(200).json({
            message: "Transfer successful!"
        });
    } catch(error) {
        session.abortTransaction();

        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: error.errors.map(err => err.message).join(", ") });
        }

        res.status(500).json({
            message: "Internal server error"
        });
    } finally {
        session.endSession();
    }
});

module.exports = router;