import Joi from 'joi';
import { Schema, Model, model } from 'mongoose';
import { IUser } from '@src/interfaces/userInterface';

/**
 * @class User
 * @author Rizwan Khan
 */

const userSchema: Schema = new Schema<IUser>({
  userId: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'User id is required'],
  },
  userName: {
    type: String,
    minlength: [4, 'User name must have at least 4 characters'],
    maxlength: [16, 'User name can have at most 16 characters'],
    trim: true,
    unique: true,
    required: [true, 'User name is required'],
  },
  name: {
    type: String,
    minlength: [4, 'Name must have at least 4 character'],
    maxlength: [16, 'Name can have at most 16 characters'],
    trim: true,
  },
  profilePic: { type: String },
  description: {
    type: String,
    minlength: 0,
    maxlength: [100, 'User description can have at most 100 character.'],
    trim: true,
  },
  followersCount: {
    type: Number,
    min: 0,
    required: [true, 'Follower count is required'],
  },
  followingCount: {
    type: Number,
    min: 0,
    required: [true, 'Following count is required'],
  },
});

export const USER_SCHEMA_VALIDATION = Joi.object({
  userId: Joi.string().required(),
  userName: Joi.string().alphanum().min(4).max(16).trim().required(),
  name: Joi.string().min(4).max(16).trim(),
  profilePic: Joi.string().uri(),
  description: Joi.string().min(0).max(100).trim().required(),
  fillowersCount: Joi.number().min(0).required(),
  followingCount: Joi.number().min(0).required(),
});

export const UserDb: Model<IUser> = model<IUser>('user', userSchema);
