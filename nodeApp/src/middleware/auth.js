import { config } from 'dotenv';
config();
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';



export const authentication = async (req, res, next) => {
    try {
        const { authorization } = req?.headers
        // console.log(authorization)
        if (!authorization) {
            return res.status(401).json({ status: false, message: 'No token provided' })
        }
        const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ status: false, message: 'Invalid token' })
        }
        req.user = decoded.id;
        next();
    } catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }

}


/* export const authorization = async (req, res, next) => {
    try {
        const tokenUserId= req.user;
        


    } catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }

} */