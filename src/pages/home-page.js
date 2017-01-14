const HomePage = {
    path: '/',
    method: 'GET',
    handler: (request, reply) => {
        reply.view('home')
    }
}

module.exports = HomePage;