var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 9000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.file('./client/index.html');
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'client'
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
