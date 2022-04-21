/* eslint-disable no-console */
/**
 * Server setup
 */
const express = require("express");
require("./src/config/database");
const ApiRoutes = require("./src/routes");
const http = require("http");
const app = express();
const pageHandlers = require("./src/controllers/page.controllers");
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()).use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", pageHandlers.default);

//route for magic page
app.get("/home", pageHandlers.handleHome);
app.get("/AddNewBook", pageHandlers.handleAddBooks);
app.post("/AddNewBook", pageHandlers.createBook);
app.get("/DeleteABook", pageHandlers.handleDeleteBooks);
app.post("/DeleteABook", pageHandlers.DeleteBook);
app.get("/books/:id", pageHandlers.handleBooks);
app.use("/api", ApiRoutes);

const server = http.createServer(app);

let port = process.env.PORT || 3000;
server.listen(port);
server.timeout = 120 * 60 * 1000;
server.on("listening", () => {
  console.log(`Started http server listening on port ${port}`);
});

server.on("error", (err) => {
  console.log("error starting server");
});
