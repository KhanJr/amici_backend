/**
 * @interface Comment
 * @author Rizwan Khan
 * 
  [
    {
      postId: 'somePostId',
      comments: [ 
      {
        commentId: 'somecommentid',
        commentUserId: 'someuserid',
        postId: 'somepostid',
        commentDescription: 'someDescription',
        commentLike: 'commentLike'
      }
      // more records....
    ]
    // more records....
  ]
 * 
 */

interface ISingleComment {
  commentId: string;
  commentUserId: string;
  postId: string;
  commentDescription: string;
  commentLike: number;
}

export interface IComment {
  postId: string;
  comments: ISingleComment[];
}
