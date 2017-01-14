const home = require('./home-page')

const pages = function (server, options, next) {
    server.route([
        home
    ])

    next();
};

pages.attributes = {
    name: 'pages',
    version: '1.0.0'
};

module.exports = pages
