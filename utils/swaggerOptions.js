const Package = require('../package.json');

const swaggerOptions = {
  documentationPath: '/',
  // basepath: '/v1/auth',
  // swaggerUIPath: '/v1/auth/',
  auth: false,
  cors: true,
  schemes: ['http', 'https'],

  info: {
    title: Package.name,
    description: Package.description,
    version: Package.version
  }
}

module.exports = swaggerOptions;