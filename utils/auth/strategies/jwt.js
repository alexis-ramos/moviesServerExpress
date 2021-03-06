const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

const UsersService = require('../../../service/users');
const { config } = require('../../../config/index');

passport.use(
  new Strategy(
    {
      secretOrKey: config.auth_jwt_secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },

    async function(tokenPayload, cb) {
      const usersService = new UsersService();
      try {
        const user = await usersService.getUser({ email: tokenPayload.email });

        if (!user) {
          return cb(boom.unauthorized(), false);
        }

        delete user.password;
        cb(null, { ...user, scope: tokenPayload.scopes });
      } catch (error) {
        return cb(error);
      }
    }
  )
);
