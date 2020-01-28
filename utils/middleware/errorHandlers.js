const { config } = require('../../config/index');

function whitErrorStack(error, stack) {
  if (config.dev) {
    return { error, stack };
  }

  return error;
}

function logErrors(error, req, res, next) {
  console.log(error);
  next(error);
}

function errorHandler(error, req, res, next) {
  // eslint-disable-line
  res.status(error.status || 500);
  res.json(whitErrorStack(error.message, error.stack));
}

module.exports = {
  logErrors,
  errorHandler
};
