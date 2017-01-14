const Hapi = require('hapi')
const Store = require('./store')
const plugins = require('./plugins')

function setup(cb) {
    return new Promise((resolve, reject) => {
        const server = new Hapi.Server();

        server.connection({
            host: Store.get('/server/host'),
            port: Store.get('/server/port')
        });

        server.register(plugins, (err) => {

            server.views({
                engines: {
                    pug: require('pug')
                },
                relativeTo: __dirname + "/../../",
                layout: false,
                path: 'templates',
                layoutPath: 'templates/layout'
            })

            if (err) {
                return reject(err);
            }

            return resolve(server);
        });
    })
}

module.exports = {
    setup: setup
};