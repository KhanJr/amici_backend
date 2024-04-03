import Joi from 'joi';
import { Schema, Model, model } from 'mongoose';
import { IUser } from '@src/interfaces/userInterface';

/**
 * @class User
 * @author Rizwan Khan
 */

const userSchema: Schema = new Schema<IUser>({
  userId: { type: String, unique: true },
  userName: {
    type: String,
    minlength: 4,
    maxlength: 16,
    required: true,
    unique: true,
  },
  name: { type: String, minlength: 4, maxlength: 16 },
  profilePic: { type: String },
  description: { type: String },
  followersCount: { type: Number },
  followingCount: { type: Number },
});

export const USER_SCHEMA_VALIDATION = Joi.object({
  userId: Joi.string().required(),
  userName: Joi.string().alphanum().min(4).max(16).trim().required(),
  name: Joi.string().min(4).max(16).trim(),
  profilePic: Joi.string(),
  description: Joi.string().min(0).max(100).trim().required(),
  fillowersCount: Joi.number().min(0).required(),
  followingCount: Joi.number().min(0).required(),
});

export const UserDb: Model<IUser> = model<IUser>('user', userSchema);
