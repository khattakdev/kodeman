const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    email: {
      type: 'string',
      required: 'true',
      defaultValue: '',
    },

    password: {
      type: 'string',
      required: 'true',
      defaultValue: '',
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = mongoose.model('users', usersSchema);
