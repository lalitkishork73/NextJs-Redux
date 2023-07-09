import wishModel from '../models/wishModel.js';

async function wishData(req, res) {
    try {
        const data = await wishModel.find().select({__v:0});
        if (data.length === 0) {
            return res.status(404).json({ status: false, message: 'No data found' })
        }
        return res.status(200).json({ status: true, data: data })
    }
    catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }
}

async function wishAbout(req, res) {
    try {

    }
    catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }
}

async function wishSent(req, res) {
    try {
        console.log("done")
        const { wish } = req.body
        console.log(wish)
        const sent = await wishModel.create({ wish: wish })
        if (!sent) {
            return res.status(400).json({ status: false, message: 'Enter correct wish' })
        }
        return res.status(201).json({ status: true, data: sent })
    }
    catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }
}

async function wishRemove(req, res) {
    try {

        const remove = await wishModel.findOneAndRemove({ _id: req.params.id })
        if (!remove) {
            return res.status(400).json({ status: false, message: 'Data all ready deleted or not found' })
        }
        return res.status(200).json({ status: true, data: remove })
    }
    catch (err) {
        return res.status(500).json({ status: false, message: err.message })
    }
}

export default { wishData, wishAbout, wishRemove, wishSent }