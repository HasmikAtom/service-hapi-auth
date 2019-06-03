'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('inert');
const Vision =require('vision');
const HapiSwagger = require('hapi-swagger');

const routes = require('./routes');

const swaggerOptions = require('./utils/swaggerOptions')

const serverInit = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost',
    routes: {
      cors: {
        credentials: true
      }
    },

  });
  
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ])

  server.route(routes);

  await server.start();
  console.log('server running on', server.info.uri);

  console.log('aaaaaaaaaaaaaa');
  return server;
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
})

serverInit();