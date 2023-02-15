import axios from "axios";
import React, { useState } from "react";

function PostCall() {
  const [postObj, setPostObj] = useState({ userID: "", title: "", body: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setPostObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", postObj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { userID, title, body } = postObj;

  return (
    <div>
      <h1>Post Call using Axios</h1>

      <div>
        <input
          type="text"
          placeholder="Enter User id"
          onChange={changeHandler}
          value={userID}
          name="userID"
        />
        <br />

        <input
          type="text"
          placeholder="Enter Title"
          onChange={changeHandler}
          value={title}
          name="title"
        />
        <br />

        <input
          type="text"
          placeholder="Enter Body"
          onChange={changeHandler}
          value={body}
          name="body"
        />
        <br />

        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
}

export default PostCall;
