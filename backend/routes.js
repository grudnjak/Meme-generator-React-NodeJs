
const express = require('express');
const memeController = require('./controllers/meme');

const router = express.Router();
module.exports = function routes(app) {
	router.use('/memes', memeController);


	app.get('/api', (req, res) => res.status(200).send({ message: 'API works.' }));
	app.get('/hello', (req, res) => res.status(200).send({ message: 'HELLO WORLD.' }));
	app.get('/users', (req, res) => res.status(200).send(

		[
			{ id: 1, usarname: 'test' },
			{ id: 2, usarname: 'Obama' },
			{ id: 3, usarname: 'Elon' },
		]
	));
	app.use('/api', router);

};