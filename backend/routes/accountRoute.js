const express = require("express");
const { authmiddleware } = require("../middleware/middleware");
const { Account } = require("../db/db");
const { default: mongoose } = require("mongoose");
const router = express.Router();
require("dotenv").config();

router.get("/balance", authmiddleware, async (req, res) => {
    const userId = req.userId;
    const account = await Account.findOne({
        userId
    });

    res.json({
        balance: account.balance
    })
});

router.post("/transfer", authmiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const {amount, to} = req.body;

        const userId = req.userId;

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
        res.status(500).json({
            message: "Internal server error"
        });
    } finally {
        session.endSession();
    }

});