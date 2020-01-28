const boom = require('@hapi/boom');
const { config } = require('../../config/index');

function whitErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }

  return error;
}

function logErrors(error, req, res, next) {
  console.log(error);
  next(error);
}

function wrapError(error, req, res, next) {
  if (!error.isBoom) {
    next(boom.badImplementation(error));
  }
  next(error);
}

function errorHandler(error, req, res, next) {
  // eslint-disable-line
  const {
    output: { statusCode, payload }
  } = error;
  res.status(statusCode);
  res.json(whitErrorStack(payload, error.stack));
}

module.exports = {
  logErrors,
  wrapError,
  errorHandler
};
