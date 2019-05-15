const db = require('../database/data');

const getAll = () => {

    return db.memes;
}

const getById = id => {

    return db.memes.find(m => m.id === parseInt(id, 10));
}

const create = (meme) => {
    db.memes.push(meme);
}

module.exports = { getAll, getById, create, }
