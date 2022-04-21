const Bookeep = require("../models/Bookeep.model");
const { createNewbook, Deleteabook } = require("./books.controller");
module.exports = {
  handleHome: async function (req, res) {
    const books = await Bookeep.find();
    const count = books ? books.length : 0;
    res.render("index", { books, count });
  },
  handleBooks: async function (req, res) {
    const id = req.params.id;
    const book = await Bookeep.findOne({
      index: id,
    });

    res.render("book", { book });
  },
  createBook: async function (req, res) {
    createNewbook(req.body, res);
  },
  DeleteBook: async function (req, res) {
    console.log("res.bosy", req.body);
    Deleteabook(req.body, res);
  },
  handleAddBooks: async function (req, res) {
    res.render("AddNewBook");
  },
  handleDeleteBooks: async function (req, res) {
    const books = await Bookeep.find();
    const count = books ? books.length : 0;
    res.render("DeleteABook", { books, count });
  },
  default: async function (req, res) {
    res.redirect("/home");
  },
};
