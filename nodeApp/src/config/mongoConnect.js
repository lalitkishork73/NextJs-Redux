import { config } from 'dotenv';
config();
import mongoose from "mongoose";
const MONGO_USERNAME = process.env.MONGO_USERNAME
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.o2wavxe.mongodb.net/ReduxDB?retryWrites=true&w=majority`



export default async function mongoConnect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(MONGO_URL, { retryWrites: true, w: 'majority' })
            .then(() => console.log('database connected'))

    }
    catch (err) {
        console.log(err);
    }
}