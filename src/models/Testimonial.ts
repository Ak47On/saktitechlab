import mongoose, {
  Schema,
  models,
  model,
} from "mongoose";

const TestimonialSchema =
  new Schema(

    {

      name: {
        type: String,
      },

      company: {
        type: String,
      },

      review: {
        type: String,
      },

      rating: {
        type: Number,
        default: 5,
      },

      image: {
        type: String,
      },

    },

    {
      timestamps: true,
    }
  );

const Testimonial =

  models.Testimonial ||

  model(
    "Testimonial",
    TestimonialSchema
  );

export default Testimonial;