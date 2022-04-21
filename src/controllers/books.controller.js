/**
 * User controller
 */
const Bookkeep = require("../models/Bookeep.model");

module.exports = {
  create: async function create(req, res) {
    let data = req.body;
    try {
      const bookAll = await Bookkeep.find();
      console.log("bookAll", bookAll);
      const book = await Bookkeep.create({
        name: data.name,
        author: data.author,
        link: data.link,
      });
      return res.status(200).json(book.toJSON());
    } catch (e) {
      return res.status(500).json({ message: "error creating data!", e });
    }
  },
  createNewbook: async function create(payload, res) {
    let data = payload;
    try {
      const bookAll = await Bookkeep.find();
      var index = bookAll.length + 1;
      console.log("index", index);
      // console.log("bookAll", bookAll);
      const book = await Bookkeep.create({
        name: data.name,
        author: data.author,
        link: data.link,
        index: index,
      });
      if (book) {
        res.redirect("/home");
      }
    } catch (e) {
      console.log("e", e);
      // res.status(500).json({ message: "error creating data!", e });
    }
  },
  Deleteabook: async function createDelete(payload, res) {
    try {
      let data = payload;
      const book = await Bookkeep.deleteOne({
        _id: data.id,
      });
      console.log("data --->>>", data);
      // res.redirect("/home");
      return res.status(200).json(payload);
      // if (book) {
      // }
    } catch (e) {
      console.log("e", e);
      // res.status(500).json({ message: "error creating data!", e });
    }
  },
};
