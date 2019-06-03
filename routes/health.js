const tooBusy = require('toobusy-js');

const routes = [];
module.exports = routes;

routes.push({
  method: 'GET',
  path: '/health',
  options: {
    auth: false,
    description: 'health check',
    tags: ['API', 'mutable', 'Health'],
    handler: () => tooBusy.lag().toString()
  }
})