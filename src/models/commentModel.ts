import { string, number, object, array } from 'joi';
import * as dotenv from 'dotenv';
import { Schema, Model, model } from 'mongoose';
import {
  IComment,
  ISingleComment,
} from '@src/interfaces/modelInterface/commentInterface';

dotenv.config();

const collectionName = process.env.COMMENT_COLLECTION_NAME || '';

const singleCommentModel: Schema = new Schema<ISingleComment>({
  commentId: {
    type: String,
    trim: true,
    required: [true, 'Comment id is required'],
    unique: true,
  },
  commentUserId: {
    type: String,
    trim: true,
    required: [true, 'Comment user id is required'],
    unique: true,
  },
  postId: {
    type: String,
    trim: true,
    required: [true, 'Comment post id is required'],
    unique: true,
  },
  commentDescription: {
    type: String,
    minlength: 0,
    maxlength: [100, 'Comment description can have at most 100 character'],
    trim: true,
    required: true,
  },
  commentLike: {
    type: Number,
    min: 0,
    required: [true, 'Comment like is required'],
  },
});

const commentModel: Schema = new Schema<IComment>({
  comments: {
    type: [singleCommentModel],
    required: [true, 'Post comment is required'],
  },
  postId: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Comment post id is required'],
  },
});

const SINGLE_COMMENT_SCHEMA_VALIDATION = object({
  commentId: string().trim().required(),
  commentUserId: string().trim().required(),
  postId: string().trim().required(),
  commentDescription: string().min(0).max(100).trim().required(),
  commentLike: number().min(0).required(),
});

export const COMMENT_SCHEMA_VALIDATION = object({
  postId: string().trim().required(),
  comments: array().items(SINGLE_COMMENT_SCHEMA_VALIDATION).required(),
});

export const CommentDb: Model<IComment> = model<IComment>(
  collectionName,
  commentModel,
  collectionName
);
