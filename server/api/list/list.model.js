const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cardSchema = require("../card/card.model").schema;

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  position: 0,
  cards: [cardSchema], 
}, 
{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model("List", listSchema);
