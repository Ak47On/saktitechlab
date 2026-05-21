import mongoose, {
  Schema,
  models,
  model,
} from "mongoose";

const SettingsSchema =
  new Schema(

    {

      stats: [

        {

          label: String,

          value: String,

        },

      ],

      socialLinks: [

        {

          name: String,

          url: String,

        },

      ],

      whatsappNumber: {
        type: String,
      },

      email: {
        type: String,
      },

      websiteUrl: {
        type: String,
      },

    },

    {
      timestamps: true,
    }
  );

const Settings =

  models.Settings ||

  model(
    "Settings",
    SettingsSchema
  );

export default Settings;