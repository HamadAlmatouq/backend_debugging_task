// #2 Fixed mongoose spelling mistake & added mode and Schema
const { model, Schema } = require("mongoose");

//removed mongoose after "new"
const todoSchema = new Schema({
  task: { type: Boolean, required: true },
  isDel: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  timeStamp: { type: Date, default: new Date() },
});

// const todoModel = mongoose.module("Todo", todoSchema);
// module.exports = todoModel;

// #3 fixed export
module.exports = model("Todo", todoSchema);
