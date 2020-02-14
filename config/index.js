require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  default_admin_password:process.env.DEFAULT_ADMIN_PASSWORD,
  default_user_password:process.env.DEFAULT_USER_PASSWORD,
  auth_jwt_secret:process.env.AUTH_JWT_SECRET,
  public_api_key_token:process.env.PUBLIC_API_KEY_TOKEN,
  admin_api_key_token:process.env.ADMIN_API_KEY_TOKEN
};

module.exports = { config };
