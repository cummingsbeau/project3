const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const similarSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Similar = mongoose.model("Similar", similarSchema);

module.exports = Similar;
