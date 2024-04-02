/**
 * @interface User
 * @author Rizwan Khan
 * 
 * 
    userId,
    userName,
    name,
    profilePic,
    description,
    followersCount,
    followingCount
 *
 */

export interface IUser {
  userId: string;
  userName: string;
  name: string;
  profilePic: string;
  description: string;
  followersCount: number;
  followingCount: number;
}
