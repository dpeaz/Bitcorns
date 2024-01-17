import mongoose from "mongoose";

const collabSchema = new mongoose.Schema({
  project: {
    type: String,
    required: true
  },
  representative: {
    type: String,
    required: true
  },
  response: [String]
});

const Collab = mongoose.model("Collab", collabSchema);

export default Collab;
