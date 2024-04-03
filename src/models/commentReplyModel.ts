import { string, number, object, array } from 'joi';
import { Schema, Model, model } from 'mongoose';
import {
  ICommentReply,
  ISingleCommentReply,
} from '@src/interfaces/commentReplyInterface';

const singleCommentReplyModel: Schema<ISingleCommentReply> =
  new Schema<ISingleCommentReply>({
    replyCommentId: { type: String, required: true, unique: true },
    commentId: { type: String, required: true, unique: true },
    userId: { type: String, required: true, unique: true },
    postId: { type: String, required: true, unique: true },
    replyDescription: {
      type: String,
      min: 0,
      max: 100,
      trim: true,
      required: true,
    },
    replyLikeCount: { type: Number, min: 0, required: true },
  });

const commentReplyModel: Schema<ICommentReply> = new Schema<ICommentReply>({
  commentId: { type: String, required: true, unique: true },
  replyComment: { type: [singleCommentReplyModel], required: true },
});

const SINGLE_COMMENT_REPLY_SCHEMA_VALIDATION = object({
  replyCommentId: string().trim().required(),
  commentId: string().trim().required(),
  userId: string().trim().required(),
  postId: string().trim().required(),
  replyDescription: string().min(0).max(100).trim().required(),
  replyLikeCount: number().min(0).required(),
});
export const COMMENT_REPLY_SCHEMA_VALIDATION = object({
  commentId: string().trim().required(),
  replyComment: array()
    .items(SINGLE_COMMENT_REPLY_SCHEMA_VALIDATION)
    .required(),
});

export const CommentReplyDb: Model<ICommentReply> = model<ICommentReply>(
  'commentReply',
  commentReplyModel
);
