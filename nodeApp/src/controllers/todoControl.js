import ToDOModel from '../models/todoModel.js';

export const createToDo = async (req, res, next) => {
    try {
        const { todo } = req.body;
        const todoBy = req.user;

        if (!todo) {
            return res.status(400).json({ status: false, message: 'Todo is required' })
        }

        const newToDo = await ToDOModel.create({ todo, todoBy });

        return res.status(201).json({ status: true, data: newToDo });



    } catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }

}
export const getToDo = async (req, res, next) => {
    try {
        const getData = await ToDOModel.find({ todoBy: req.user }).sort({ todo: 1 })
        return res.status(200).json({ status: true, data: getData })
    } catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }
}

export const removeToDo = async (req, res, next) => {
    try {

        const id = req.params.id;

        const removeData = await ToDOModel.findOneAndRemove({ _id: id })
        return res.status(200).json({ status: true, data: removeData })
    } catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }
}