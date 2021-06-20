import "./App.css";
import { useState, useEffect } from "react";
import Post from "./components/Post";

function App() {
  const URL = "https://api-posts-dce.herokuapp.com/";
  const [posts, setPosts] = useState([]);

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
    <>
      <h1>Blog posts populares</h1>
      <div>
        Orden:
        <button>Ascendente</button>
        <button>Descendente</button>
      </div>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </>
  );
}

export default App;
