const { Schema, model, Types } = require("mongoose");

const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 3,
  },
  //   links: [{ types: Types.Objectid, ref: "Link" }],
});

module.exports = model("User", User);
