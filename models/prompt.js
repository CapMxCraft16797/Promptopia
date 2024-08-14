import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.objectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "tag is required."],
  },
});

const Prompt = models.prompt || model("Prompt", PromptSchema);
export default Prompt;
