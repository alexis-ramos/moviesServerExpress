const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');
const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

app.use(express.json());

moviesApi(app);
//Recordar que los middlewares siempre iran al final de las rutas
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
