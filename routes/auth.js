const Auth = require('../api/auth');

const routes = [];
module.exports = routes;

routes.push({
  method: 'POST',
  path: '/login',
  options: {
    description: 'login endpoint',
    notes: 'logs the user in',
    tags: ['api'], // mandatory
    handler: Auth.login
  }
})

routes.push({
  method: 'GET',
  path: '/logout',
  options: {
    description: 'logout endpoint',
    notes: 'logs the user out',
    tags: ['api'], // mandatory
    handler: () => {
      return 'this is logout endpoint'
    }
  }
})