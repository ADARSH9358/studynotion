const mongoose = require("mongoose")

const courseProgress = new mongoose.Schema({

  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  // array of viedoes
  completedVideos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubSection",
    },
  ],
})

module.exports = mongoose.model("courseProgress", courseProgress)