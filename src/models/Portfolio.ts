import mongoose, {
  Schema,
  models,
  model,
} from "mongoose";

const PortfolioSchema =
  new Schema(

    {

      title: {
        type: String,
        required: true,
      },

      slug: {
        type: String,
        required: true,
      },

      category: {
        type: String,
      },

      description: {
        type: String,
      },

      image: {
        type: String,
      },

      liveLink: {
        type: String,
      },

      githubLink: {
        type: String,
      },

      techStack: {
        type: [String],
      },

      features: {
        type: [String],
      },

      whatsappNumber: {
        type: String,
      },

      previewType: {
        type: String,
        default: "image",
      },

    },

    {
      timestamps: true,
    }
  );

const Portfolio =

  models.Portfolio ||

  model(
    "Portfolio",
    PortfolioSchema
  );

export default Portfolio;