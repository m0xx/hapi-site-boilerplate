const version = require('./../../../package.json').version;
const versionCache = version.replace(/[^0-9]/g, "");

const register = function (server, options, next) {

    server.ext('onPostHandler', function (request, reply) {
        const response = request.response;

        if (response.variety === 'view') {
            response.source.context = response.source.context || {};
            response.source.context.version = version;
            response.source.context.versionCache = `?v=${versionCache}`;
        }

        return reply.continue();
    });

    return next();
};

register.attributes = {
    name: 'template-context',
    version: '1.0.0'
};

module.exports = register;