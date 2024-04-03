import { string, number, object } from 'joi';
import { Schema, Model, model } from 'mongoose';
import { IMedia, IStatus, MediaTypes } from '@src/interfaces/statusInterface';

const mediaModel: Schema = new Schema<IMedia>({
  mediaTypes: {
    type: String,
    enum: MediaTypes,
    default: MediaTypes.IMAGE,
    required: true,
  },
  mediaUrl: { type: String, trim: true, required: true, unique: true },
});

const statusModel: Schema = new Schema<IStatus>({
  userId: { type: String, unique: true, trim: true, required: true },
  postId: { type: String, unique: true, trim: true, required: true },
  statusDescription: {
    type: String,
    min: 0,
    max: 100,
    trim: true,
    required: true,
  },
  saveCount: { type: Number, min: 0, required: true },
  likeCount: { type: Number, min: 0, required: true },
  hashTag: { type: [String] },
  media: { type: [mediaModel], required: true },
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
  hashTag: [string],
  media: [MEDIA_SCHEMA_VALIDATION],
});

export const StatusDb: Model<IStatus> = model<IStatus>('status', statusModel);
