const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');
app.use(express.json());

moviesApi(app);

// app.get('/', function(req, res) {
//   res.send('hello world');
// });

// app.get('/json', function(req, res) {
//   res.json('hello world');
// });

//Reto, crear servidor que reciba un año y saber si es biciesto o no
// app.get('/bisiesto/:year', function(req, res) {
//   let year = req.params.year;
//   if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
//     res.send(`${req.params.year} is bisiesto`);
//   } else {
//     res.send(`${req.params.year} is bisiesto`);
//   }
// });

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
