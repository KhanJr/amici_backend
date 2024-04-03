/**
 * @interface CommentReply
 * @author Rizwan Khan
 * 
  [
    {
      commentId: 'someCommentId',
      replyComment: {
        [
          {
            replyCommentId: 'someReplyId',
            commentId: 'someCommentId',
            userId: 'someUserId',
            postId: 'somePostId',
            replyDescription: 'someDescription',
            replyLikeCount: 'replyLikeCounts'
          }
          // more records....
        ]
    }
      // more records
  ]
 * 
 */

export interface ISingleCommentReply {
  replyCommentId: string;
  commentId: string;
  userId: string;
  postId: string;
  replyDescription: string;
  replyLikeCount: number;
}

export interface ICommentReply {
  commentId: string;
  replyComment: ISingleCommentReply[];
}
