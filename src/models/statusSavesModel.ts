import { array, object, string } from 'joi';
import { Model, Schema, model } from 'mongoose';
import {
  IUserSaves,
  IUserStatus,
  IStatusSaves,
  IUserPosts,
} from '@src/interfaces/statusSaveInterface';

const userStatusModel: Schema<IUserStatus> = new Schema<IUserStatus>({
  postId: { type: String, unique: true, trim: true, required: true },
});

const userSavesModel: Schema<IUserSaves> = new Schema<IUserSaves>({
  postId: { type: String, unique: true, trim: true, required: true },
});

const userPostsModel: Schema<IUserPosts> = new Schema<IUserPosts>({
  status: { type: [userStatusModel], required: true },
  saves: { type: [userSavesModel], required: true },
});

const statusSavesModel: Schema<IStatusSaves> = new Schema<IStatusSaves>({
  userId: { type: String, unique: true, trim: true, required: true },
  post: { type: userPostsModel, required: true },
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
  'statusSaves',
  statusSavesModel
);
