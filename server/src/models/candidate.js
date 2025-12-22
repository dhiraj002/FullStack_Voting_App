import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,

    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  party: {
    type: String,
    required: true,
    trim: true,
  },
  votes: [
    {
      user: mongoose.Schema.Types.ObjectId,
      ref: "User",
      votedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  voteCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;
