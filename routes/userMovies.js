const express = require('express');

const userMoviesService = require('../service/userMovies');
const validationHandler = require('../utils/middleware/validationHandler');

const {movieSchema} = require('../utils/schemas/movies');
const {userIdSchema} = require('../utils/schemas/users');
const {createUserMovieSchema} = require('../utils/schemas/userMovies');


function userMoviesApi (app) {
    const router = express.Router();
    app.user('/api/user-movies', router);

    const userMoviesServiceUno = new userMoviesService();

    router.get('/', validationHandler({userId: userIdSchema}, 'query'),
    async function (req, res, next) {
        const {userId} = req.query;

        try {
            const userMovies = await userMoviesServiceUno.getUserMovies({userId});

            res.status(200).json({
                data: userMovies,
                message: 'user movies listed'
            });
        } catch (error) {
            next(error);
        }
    });

    router.post('/', validationHandler(createUserMovieSchema), async function (req, res, next) {
        const {body: userMovie} = req;

        try {
            const createdUserMovieId = await userMoviesService.createUserMovie({
                userMovie
            });

            res.status(201).json({
                data: createdUserMovieId,
                message: 'user movie created'
            });

            
        } catch (error) {
            next(error);
        }
    });


    router.delete('/:userMovieId', validationHandler({userMovieId: userIdSchema}, 'params'),
    async function(req, res, next) {
        const {userMovieId} = req.params;

        try {
            const deleteUserMovieId = await userMoviesService.deleteUserMovie({
                userMovieId
            });

            res.status(200).json({
                data: deleteUserMovieId,
                message: 'user movie delete'
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = userMoviesApi; 