const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
      type: String,
      unique: true
    },
    name: {
        type: String,
        unique: true
      },
      name: {
        type: String,
        unique: true
      },
      name: {
        type: String,
        unique: true
      },
      name: {
        type: String,
        unique: true
      },
    notes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Note"
      }
    ]
  });
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = Workout;