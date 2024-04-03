/**
 * @interface FollowersFollowings
 * @author Rizwan Khan
 * 
 [
    {
      userId: 'someUser'
      follow: {
        followers: [userId's....],
        following: [userId's....]
      }
    }
    // more records....
  ]
 * 
 */

export interface IFollowers {
  userId: string;
}

export interface IFollowing {
  userId: string;
}

export interface IUserFollow {
  followers: IFollowers[];
  following: IFollowing[];
}

export interface IFollowersFollowings {
  userId: string;
  follow: IUserFollow;
}
