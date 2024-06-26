//user,title,bio,profile picture, links:{fb,twitter},posts[],bookmarks

const { Schema, model } = require("mongoose");

const User=require('./User')
const Post=require('./Post')

const profileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      max: 100,
    },
    bio: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    profilePic: {
      type: String,
    },

    links: {
      website: String,
      facebook: String,
      twitter: String,
      github: String,
    },

    posts: [
      {
        type: Schema.Types.ObjectId,
        res: Post,
      },
    ],

    bookmarks: [
      {
        type: Schema.Types.ObjectId,

        ref: Post,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Profile = model("Profile", profileSchema);

module.exports = Profile;
