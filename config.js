module.exports = {
    server: {
        $filter: 'env',
        production: {
            host: process.env.SERVER_HOST,
            port: process.env.SERVER_PORT
        },
        $default: {
            host: '0.0.0.0',
            port: 8000
        }
    },
    templates: {
        $filter: 'env',
        production: {
            cached: true,
        },
        $default: {
            cached: false
        }
    }
};
