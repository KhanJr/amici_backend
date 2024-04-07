/**
 * @interface StatusSaves
 * @author Rizwan Khan
 * 
 [
    {
      userId: 'someUser',
      post: {
          status: [postId's....]
          saves: [postId's....]
        }
    },
  // more more records
  ]
 *
 */

export interface IUserStatus {
  postId: string;
}

export interface IUserSaves {
  postId: string;
}

export interface IUserPosts {
  status: IUserStatus[];
  saves: IUserSaves[];
}

export interface IStatusSaves {
  userId: string;
  post: IUserPosts;
}
