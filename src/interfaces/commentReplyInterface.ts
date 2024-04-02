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

interface ISingleCommentReply {
  replyCommentId: string;
  commentId: string;
  userId: string;
  postId: string;
  replyDescription: string;
  replyLikeCount: string;
}

export interface ICommentReply {
  commentId: string;
  replyComment: ISingleCommentReply[];
}
