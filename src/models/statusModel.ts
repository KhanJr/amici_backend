import { string, number, object, array } from 'joi';
import { Schema, Model, model } from 'mongoose';
import * as dotenv from 'dotenv';
import {
  IMedia,
  IStatus,
  MediaTypes,
} from '@src/interfaces/modelInterface/statusInterface';

dotenv.config();
const collectionName = process.env.STATUS_COLLECTION_NAME || '';

const mediaModel: Schema = new Schema<IMedia>({
  mediaTypes: {
    type: String,
    enum: MediaTypes,
    default: MediaTypes.IMAGE,
    required: [true, 'Status media type is required'],
  },
  mediaUrl: {
    type: String,
    trim: true,
    required: [true, 'Status media url is required'],
    unique: true,
  },
});

const statusModel: Schema = new Schema<IStatus>({
  userId: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'User id is required'],
  },
  postId: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Post id is required'],
  },
  statusDescription: {
    type: String,
    minlength: 0,
    maxlength: [100, 'Status description can have at most 100 character'],
    trim: true,
    required: [true, 'Status description is required'],
  },
  saveCount: {
    type: Number,
    min: 0,
    required: [true, 'Status save count is required'],
  },
  likeCount: {
    type: Number,
    min: 0,
    required: [true, 'Status like count is required'],
  },
  hashTag: { type: [String] },
  media: { type: [mediaModel], required: [true, 'Status media is required'] },
});

const MEDIA_SCHEMA_VALIDATION = object({
  mediaTypes: string().required(),
  mediaUrl: string().trim().uri().required(),
});

export const STATUS_SCHEMA_VALIDATION = object({
  userId: string().trim().required(),
  postId: string().trim().required(),
  statusDescription: string().min(0).max(100).trim().required(),
  saveCount: number().min(0).required(),
  likeCount: number().min(0).required(),
  hashTag: array<string>(),
  media: [MEDIA_SCHEMA_VALIDATION],
});

export const StatusDb: Model<IStatus> = model<IStatus>(
  collectionName,
  statusModel,
  collectionName
);
