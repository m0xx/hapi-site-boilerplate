const register = function (server, options, next) {
    const dirs = ['css', 'js']

    server.route(dirs.map((dir) => {
        return {
            method: 'GET',
            path: `/${dir}/{path*}`,
            handler: {
                directory: {
                    path: `.build/${dir}`
                }
            }
        }
    }))

    server.route({
        method: 'GET',
        path: '/public/{path*}',
        handler: {
            directory: {
                path: 'public'
            }
        }
    })

    return next();
};

register.attributes = {
    name: 'public',
    version: '1.0.0'
};

module.exports = register;