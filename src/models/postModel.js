import pool from "../../db/connectionDB.js";

const getPosts = async () => {
    const SQLquery = { text: "SELECT * FROM posts" };
    try {
      const response = await pool.query(SQLquery);
      return response.rows;
    } catch (error) {
      console.log(error);
    }
  };
  
  const createPost = async ({ titulo, url, descripcion }) => {
    const SQLquery = {
      text: "INSERT INTO posts (titulo, img, descripcion, likes ) VALUES ($1, $2, $3, 0) RETURNING *",
      values: [ titulo, url, descripcion ],
    };
    try {
      const response = await pool.query(SQLquery);
      return response.rows;
    } catch (error) {
      console.log(error);
    }
  };
  
  export { getPosts, createPost };