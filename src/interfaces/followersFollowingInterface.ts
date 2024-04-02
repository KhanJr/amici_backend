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

interface IFollowers {
  userId: string;
}

interface IFollowing {
  userId: string;
}

export interface IFollowersFollowings {
  userId: string;
  follow: {
    followers: IFollowers[];
    following: IFollowing[];
  };
}
