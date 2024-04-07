import { array, object, string } from 'joi';
import { Model, Schema, model } from 'mongoose';
import {
  IUserFollow,
  IFollowers,
  IFollowing,
  IFollowersFollowings,
} from '@src/interfaces/modelInterface/followersFollowingInterface';

const followersModel: Schema<IFollowers> = new Schema<IFollowers>({
  userId: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Follower userId is required'],
  },
});

const followingModel: Schema<IFollowing> = new Schema<IFollowing>({
  userId: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Following userId is required'],
  },
});

const userFollowModel: Schema<IUserFollow> = new Schema<IUserFollow>({
  followers: {
    type: [followersModel],
    required: [true, 'Followers is required'],
  },
  following: {
    type: [followingModel],
    required: [true, 'Following is required'],
  },
});

const followersFollowingModel: Schema<IFollowersFollowings> =
  new Schema<IFollowersFollowings>({
    userId: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'Follower userId is required'],
    },
    follow: { type: userFollowModel, required: [true, 'Follow is required'] },
  });

const USER_FOLLOWER_SCHEMA = object({
  userId: string().trim().required(),
});

const USER_FOLLOWING_SCHEMA = object({
  userId: string().trim().required(),
});

const USER_FOLLOW_SCHEMA = object({
  status: array().items(USER_FOLLOWER_SCHEMA).required(),
  saves: array().items(USER_FOLLOWING_SCHEMA).required(),
});

export const FOLLOWERS_FOLLOWING_SCHEMA = object({
  userId: string().trim().required(),
  post: USER_FOLLOW_SCHEMA,
});

export const FollowersFollowingDb: Model<IFollowersFollowings> =
  model<IFollowersFollowings>(
    'followersFollowing',
    followersFollowingModel,
    'followerFollowing'
  );
