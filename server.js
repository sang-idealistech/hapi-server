const Hapi = require("@hapi/hapi");
const routes = require("./routes");

// buat atau init server async hapi
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: "localhost",
    });

    // modul import routes
    server.route(routes);

    // berjalan setelah async buat server
    await server.start();

    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
