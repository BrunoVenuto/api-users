const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
        type: String,
        require: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // não retorna senha por padrão
    }
  },
  {
    timestamps: true, // createdAt / updatedAt
  },
);

module.exports = mongoose.model("User", userSchema);
