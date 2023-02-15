import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [erroMsg, setErroMsg] = useState("");

  const GetPosts = async () => {
    try {
      setErroMsg("");
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    } catch (error) {
      setErroMsg(error.toJSON().message);
      //console.log(error.toJSON().message);

      // if (error.response) {
      //   // The request was made and the server responded with a status code
      //   // that falls out of the range of 2xx
      //   console.log(error.response.data);
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      // } else if (error.request) {
      //   // The request was made but no response was received
      //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      //   // http.ClientRequest in node.js
      //   console.log(error.request);
      // } else {
      //   // Something happened in setting up the request that triggered an Error
      //   console.log("Error", error.message);
      // }
    }

    // .then((response) => {
    //   console.log(response);
    //   setPosts(response.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  };

  useEffect(() => {
    GetPosts();
  }, []);

  const deleteHandler = (id, e) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Get Call using Axios</h1>

      <div>
        {erroMsg.length < 1 && posts.length > 0 ? (
          posts.slice(0, 6).map((post) => (
            <div className="post" key={post.id}>
              {post.title}
              <br />
              <br />
              <button onClick={(e) => deleteHandler(post.id, e)}>
                Delete Post
              </button>
            </div>
          ))
        ) : (
          <h2>{erroMsg}</h2>
        )}
      </div>
    </div>
  );
}

export default Posts;
