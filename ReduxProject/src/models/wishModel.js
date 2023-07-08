import mongoose, { Schema } from "mongoose";

const WishSchema = new Schema({
    wish: { type: String }
});

export default mongoose.model("wishes", WishSchema)