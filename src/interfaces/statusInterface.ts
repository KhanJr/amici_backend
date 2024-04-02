/**
 * @interface Status
 * @author Rizwan Khan
 * 
 [
    {
      userId: 'someUserId',
      postId: 'somePostId',
      statusDescrption: 'someDescription',
      saveCount: 'saveCounts',
      likeCount: 'likeCounts',
      hashTag: ['array of hashtags', ....],
      media: [
              {
                mediaType: 'mp4'/'mp3'/'jpeg'/'str',
                mediaUrl: 'someMediaUrl'
              }
            ]
    }
  ]
 * 
 */

enum MediaTypes {
  Audio,
  Video,
  Text,
  Image,
}

interface IMedia {
  mediaTypes: MediaTypes;
  mediaUrl: string;
}

export interface IStatus {
  userId: string;
  postId: string;
  statusDescription: string;
  saveCount: number;
  likeCount: number;
  hashTag: string[];
  media: IMedia[];
}
