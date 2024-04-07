import { array, object, string } from 'joi';
import { Model, Schema, model } from 'mongoose';
import {
  IUserSaves,
  IUserStatus,
  IStatusSaves,
  IUserPosts,
} from '@src/interfaces/modelInterface/statusSaveInterface';

const userStatusModel: Schema<IUserStatus> = new Schema<IUserStatus>({
  postId: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Post id is required'],
  },
});

const userSavesModel: Schema<IUserSaves> = new Schema<IUserSaves>({
  postId: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Post id is required'],
  },
});

const userPostsModel: Schema<IUserPosts> = new Schema<IUserPosts>({
  status: {
    type: [userStatusModel],
    required: [true, 'User status is required'],
  },
  saves: { type: [userSavesModel], required: [true, 'User saves is required'] },
});

const statusSavesModel: Schema<IStatusSaves> = new Schema<IStatusSaves>({
  userId: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'User id is required'],
  },
  post: { type: userPostsModel, required: [true, 'Post id is required'] },
});

const USER_STATUS_SCHEMA = object({
  postId: string().trim().required(),
});

const USER_SAVES_SCHEMA = object({
  postId: string().trim().required(),
});

const USER_POSTS_SCHEMA = object({
  status: array().items(USER_STATUS_SCHEMA).required(),
  saves: array().items(USER_SAVES_SCHEMA).required(),
});

export const STATUS_SAVES_SCHEMA = object({
  userId: string().trim().required(),
  post: USER_POSTS_SCHEMA,
});

export const StatusSavesDb: Model<IStatusSaves> = model<IStatusSaves>(
  'statusSave',
  statusSavesModel,
  'statusSave'
);
