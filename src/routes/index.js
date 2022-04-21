const { Router } = require("express");
const routes = new Router();
const handlers = require("../controllers/books.controller");
routes.post("/books", handlers.create);
routes.post("/AddNewBook", handlers.create);
routes.post("/DeleteABook", handlers.Deleteabook);
routes.all("*", (req, res, next) => next());

module.exports = routes;
