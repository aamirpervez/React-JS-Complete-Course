import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionAddBook } from "../../actions/actionManageBooks";

function AddBook() {
  const dispatch = useDispatch();

  const [bkname, setBkname] = useState("");
  const [bkauthor, setBkauthor] = useState("");
  const [bkstatus, setBkstatus] = useState("Available");
  const [bkrating, setBkrating] = useState(5);

  const AddBookToStore = () => {
    let obj = {
      bookid: Math.floor(Math.random() * 100000),
      bookname: bkname,
      author: bkauthor,
      status: bkstatus,
      rating: parseInt(bkrating),
    };

    dispatch(actionAddBook(obj));
  };

  return (
    <div>
      <table>
        <tr>
          <td>
            <label for="bookname">Book Name:</label>
          </td>
          <td>
            <input
              type="text"
              name="bookname"
              value={bkname}
              onChange={(e) => setBkname(e.target.value)}
              id="bookname"
            />
          </td>
        </tr>

        <tr>
          <td>
            <label for="author">Author:</label>
          </td>
          <td>
            <input
              type="text"
              name="author"
              id="author"
              value={bkauthor}
              onChange={(e) => setBkauthor(e.target.value)}
            />
          </td>
        </tr>

        <tr>
          <td>
            <label for="bookstatus">Choose a Status:</label>
          </td>
          <td>
            <select
              name="status"
              id="status"
              value={bkstatus}
              onChange={(e) => setBkstatus(e.target.value)}
            >
              <option value="Available">Available</option>
              <option value="Not Available">Not Available</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label for="bookrating">Rating:</label>
          </td>
          <td>
            <select
              name="rating"
              id="rating"
              value={bkrating}
              onChange={(e) => setBkrating(e.target.value)}
            >
              <option value="5">Excellent</option>
              <option value="4">Very Good</option>
              <option value="3">Average</option>
              <option value="2">Below average</option>
              <option value="1">Waste of time</option>
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button onClick={() => AddBookToStore()}>Save</button>
            <button>Cancel</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default AddBook;
