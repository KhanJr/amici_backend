import { string, number, object, array } from 'joi';
import { Schema, Model, model } from 'mongoose';
import {
  ICommentReply,
  ISingleCommentReply,
} from '@src/interfaces/modelInterface/commentReplyInterface';

const singleCommentReplyModel: Schema<ISingleCommentReply> =
  new Schema<ISingleCommentReply>({
    replyCommentId: {
      type: String,
      trim: true,
      required: [true, 'Reply comment id is requried'],
      unique: true,
    },
    commentId: {
      type: String,
      trim: true,
      required: [true, 'Comment id is required'],
      unique: true,
    },
    userId: {
      type: String,
      trim: true,
      required: [true, 'Reply comment user id is required'],
      unique: true,
    },
    postId: {
      type: String,
      trim: true,
      required: [true, 'Reply comment post id is required'],
      unique: true,
    },
    replyDescription: {
      type: String,
      minlength: 0,
      maxlength: [
        100,
        'Reply comment description can have at most 100 character',
      ],
      trim: true,
      required: [true, 'Reply description is required'],
    },
    replyLikeCount: {
      type: Number,
      min: 0,
      required: [true, 'Reply comment like is required'],
    },
  });

const commentReplyModel: Schema<ICommentReply> = new Schema<ICommentReply>({
  commentId: {
    type: String,
    trim: true,
    required: [true, 'Comment id is required'],
    unique: true,
  },
  replyComment: {
    type: [singleCommentReplyModel],
    required: [true, 'Reply comment is required'],
  },
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
  commentReplyModel,
  'commentReply'
);
