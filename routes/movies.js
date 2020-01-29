const express = require('express');
const MoviesService = require('../service/movies');
const {
  movieSchema,
  createMovieSchema,
  updatedMovieSchema
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS
} = require('../utils/time');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  router.get('/', async function(req, res, next) {
    cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });
      //throw new Error('error getting movies');
      res.status(200).json({
        data: movies,
        message: 'movies listened'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get(
    '/:movieId',
    validationHandler({ movieId: movieSchema }, 'params'),
    async function(req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { movieId } = req.params;
      try {
        const movies = await moviesService.getMovie({ movieId });
        res.status(200).json({
          data: movies,
          message: 'movie retrieve'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post('/', validationHandler(createMovieSchema), async function(
    req,
    res,
    next
  ) {
    const { body: movie } = req;

    try {
      const createdMovieId = await moviesService.createMovie({ movie });
      res.status(201).json({
        data: createdMovieId,
        message: 'movie create'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/:movieId',
    validationHandler({ movieId: movieSchema }, 'params'),
    validationHandler(updatedMovieSchema),
    async function(req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updatedMovieId = await moviesService.updateMovie({
          movieId,
          movie
        });
        res.status(200).json({
          data: updatedMovieId,
          message: 'update movie id'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:movieId',
    validationHandler({ movieId: movieSchema }, 'params'),
    async function(req, res, next) {
      const { movieId } = req.params;
      try {
        const deleteMovieId = await moviesService.deleteMovie({ movieId });
        res.status(200).json({
          data: deleteMovieId,
          message: 'deleted movie'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = moviesApi;
