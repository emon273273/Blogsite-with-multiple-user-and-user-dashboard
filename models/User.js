//Name,Email,Password and Profile thakbe


const { Schema, model } = require("mongoose");
const Profile=require ('./Profile')

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 30,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: Schema.Types.ObjectId,
      ref: Profile,

      //ekhane kokhonoi required korbo na
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
