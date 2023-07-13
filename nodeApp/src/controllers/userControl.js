import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

export const createUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email && !password) {
            return res.status(400).json({ status: false, message: "Please provide email and password" })
        }

        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ status: false, message: "User Already Exist! please try to login" })
        }


        const salt = 10;

        const newPass = await bcrypt.hash(password, salt);


        const createUser = await userModel.create({ email, password: newPass });
        if (!createUser) {
            return res.status(400).json({ status: false, message: "server error" })
        }
        return res.status(201).json({ status: true, message: "User created successfully", data: createUser })

    } catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }

}


export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email && !password) {
            return res.status(400).json({ status: false, message: "Please provide email and password" })
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ status: false, message: "Invalid email or password" })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ status: false, message: "Invalid email or password" })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '5h' });

        res.setHeader('token', token);
        return res.status(201).json({ status: true, message: "User logged in successfully", token: token, id: user._id })

    } catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }

}