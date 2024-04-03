import { string, number, object, array } from 'joi';
import { Schema, Model, model } from 'mongoose';
import { IComment, ISingleComment } from '@src/interfaces/commentInterface';

const singleCommentModel: Schema = new Schema<ISingleComment>({
  commentId: { type: String, required: true, unique: true },
  commentUserId: { type: String, required: true, unique: true },
  postId: { type: String, required: true, unique: true },
  commentDescription: {
    type: String,
    min: 0,
    max: 100,
    trim: true,
    required: true,
  },
  commentLike: { type: Number, min: 0, required: true },
});

const commentModel: Schema = new Schema<IComment>({
  comments: { type: [singleCommentModel], required: true },
  postId: { type: String, required: true },
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
  'comment',
  commentModel
);
