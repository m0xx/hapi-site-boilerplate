const Server = require('./src/config/server');

Server.setup()
    .then((server) => {
        return server.start()
            .then(() => {
                console.log(`Server running at ${server.info.uri}`);
            })
    })
    .catch((err) => {
        console.error(err)
    })

