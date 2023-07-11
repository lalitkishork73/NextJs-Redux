import { Schema, model } from "mongoose";


const createToDoSchema = new Schema({
    todo: {
        type: String,
        required: true
    },
    todoBy: {
        type: Schema.ObjectId,
        ref: 'user'
    }
}, { timestamps: true })


export default model('todo', createToDoSchema)

