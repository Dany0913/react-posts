import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const URL = "https://api-posts-dce.herokuapp.com/";
  const [posts, setPosts] = useState();

  const getPosts = async () => {
    try {
      const resp = await fetch(URL);
      const post = await resp.json();
      console.log(post);
      setPosts(post);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getPosts(), []);
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export default App;
