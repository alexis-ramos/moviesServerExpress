const { moviesMock } = require('../utils/mocks/movies');

class MoviesService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie() {
    const movies = await Promise.resolve(moviesMock);
    return movies || {};
  }

  async createMovie() {
    const movies = await Promise.resolve(moviesMock[0].id);
    return movies;
  }

  async updateMovie() {
    const updatedMovieId = await Promise.resolve(moviesMock[0].id);
    return updatedMovieId;
  }

  async deleteMovie() {
    const deletedMovieId = await Promise.resolve(moviesMock[0].id);
    return deletedMovieId;
  }
}

module.exports = MoviesService;
