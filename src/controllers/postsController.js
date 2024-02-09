import { getPosts, createPost } from "../models/postModel.js";

const getAllPosts = async (req, res) => {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};
const createPosts = async (req, res) => {
  try {
    const post = req.body;
    const newPost = await createPost(post);
    res.status(201).json({ post: newPost });
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

export { getAllPosts, createPosts };
