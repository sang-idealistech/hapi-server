const routes = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "This is Home Page";
        },
    },
    {
        method: "*",
        path: "/",
        handler: (request, h) => {
            return "This page can't response with this method";
        },
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "All about this page";
        },
    },
    {
        method: "*",
        path: "/about",
        handler: (request, h) => {
            return "About can't respond that method";
        },
    },
    {
        // path parameter pake ?
        method: "GET",
        path: "/users/{name?}",
        handler: (request, h) => {
            const { name = "stranger" } = request.params;
            // menambahkan query handler
            const { lang } = request.query;
            // kalau gk pake query, lgsg aja return
            if (lang == "id") {
                return `Hai, ${name}!`;
            } else {
                return `Hello, ${name}!`;
            }
        },
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "what do u search? its nothing";
        },
    },
];

module.exports = routes;
