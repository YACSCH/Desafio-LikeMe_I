import express from 'express';
import { getAllPosts, createPosts }  from '../src/controllers/postsController.js'

const router = express.Router();

router.get('/posts', getAllPosts)
router.post('/posts',createPosts)

export default router;