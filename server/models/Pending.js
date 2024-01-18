import mongoose from "mongoose";

const pendingSchema = new mongoose.Schema({
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

const Pending = mongoose.model("Pending", pendingSchema);

export default Pending;
