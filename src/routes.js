const express = require('express');

const UserController = require('./controllers/UserController');
const FilmsController = require('./controllers/FilmsController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/films', FilmsController.index);
routes.post('/users/:user_id/films', FilmsController.store);
routes.delete('/users/:user_id/films', FilmsController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;