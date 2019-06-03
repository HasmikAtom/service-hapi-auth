const health = require('./health');
const auth = require('./auth');

const _routes = [health, auth];

const routes = [];

_routes.forEach((_route) => {
  if (typeof _route === 'object' && _route.length) {
    _route.forEach((_r) => {
      routes.push(_r);
    })
  } else if (typeof _route === 'object') {
    routes.push(_route);
  }
});

module.exports = routes;
