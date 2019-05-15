const memeModel = require('../models/meme');

const getAll = (req, res) => {
    const memes = memeModel.getAll()
    res.send(memes);

}

const getById = (req, res) => {
    const id = req.params.id;
    const meme = memeModel.getById(id)
    res.send(meme);

}
const create = (req, res) => {
    const meme = req.body;
    memeModel.create(meme);
    res.send();
}

module.exports = { getAll, getById, create }