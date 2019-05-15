const express = require('express');
const memeService = require('../services/meme');

const memeController = express.Router();

memeController.get('/', memeService.getAll);
memeController.get('/:id', memeService.getById);
memeController.post('/', memeService.create);
module.exports = memeController;
