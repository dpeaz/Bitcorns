import mongoose from "mongoose";

const bitmapSchema = new mongoose.Schema({
  inscriptionId: {
    type: String,
    required: true,
    validate: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/
  }
});

const Bitmap = mongoose.model("Bitmap", bitmapSchema);

export default Bitmap;
