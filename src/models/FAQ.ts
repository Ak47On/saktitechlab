import mongoose, {
  Schema,
  models,
  model,
} from "mongoose";

const FAQSchema = new Schema(

  {
    question: {
      type: String,
      required: true,
    },

    answer: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const FAQ =
  models.FAQ || model("FAQ", FAQSchema);

export default FAQ;