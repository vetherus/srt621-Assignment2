const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const BookKeepSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "book name is required!"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "author is required!"],
    },
    link: {
      type: String,
      required: [true, "link is required!"],
    },
    index: {
      type: String,
    },
    createdDate: {
      type: Date,
      default: new Date(),
    },
    updatedDate: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

BookKeepSchema.methods = {
  toJSON() {
    return {
      id: this._id,
      name: this.name,
      author: this.author,
      link: this.link,
    };
  },
};

const Bookkeep = mongoose.model("BookKeep", BookKeepSchema);
module.exports = Bookkeep;
