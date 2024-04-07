import { getUserById } from '@src/controller/app/user/userController';
import express from 'express';

// /*
//   @Status Model
//   author: Rizwan Khan

//   statusId: string;
//   statusMedia: string;
//   statusSaves: number;
//   statusLikes: number;
//   statusUserName: string;
//   statusUserProfile: string;
//   statusDescritption?: string;
//   statusComments: // TODO: need to create;
// */

export const router: express.Router = express.Router();

// Get status
router.get('/user/:id', getUserById);

// // Get a status
// router.get('/:cname', getStatus);

// // Create a status
// router.post('/', createStatus);
// // Update a status
// router.put('/:cname', updateStatus);

// router.delete('/:cname', deleteStatus);
