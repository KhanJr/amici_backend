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

interface IStatus {
  postId: string;
}

interface ISaves {
  postId: string;
}

export interface IStatusSaves {
  userId: string;
  post: {
    status: IStatus[];
    saves: ISaves[];
  };
}
