import { model, Schema } from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const userSchema = new Schema({
  username: { type: String, required: true, max: 100 },
  password: { type: String, required: true, max: 100 },
});

userSchema.plugin(findOrCreate);

export default model("usuarios", userSchema);
