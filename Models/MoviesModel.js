import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    userImage: { type: String },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const moviesSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    titleImage: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    language: {
      type: String,
    },
    year: {
      type: Number,
    },
    time: {
      type: Number,
    },
    video: {
      type: String,
      // required: true
    },
    rate: {
      type: Number,
      required: true,
      default: 0,
    },
    numberOfReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
    casts: [
      {
        name: { type: String, required: true },
        image: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Movies", moviesSchema);
