const express = require('express');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const moviesApi = require('./routes/movies.js');
const userMoviesApi = require('./routes/userMovies');


const {
  logErrors,
  errorHandler,
  wrapError
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());

// rutas
authApi(app);
moviesApi(app);
userMoviesApi(app);

//catch error 404
app.use(notFoundHandler);

//Recordar que los middlewares siempre iran al final de las rutas
//Errors Middleware
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
