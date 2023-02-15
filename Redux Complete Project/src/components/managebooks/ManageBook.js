import React from "react";
import AddBook from "./AddBook";
import "./module.addbook.css";
import StatsPanel from "../common/StatsPanel";
import Listofbooks from "./Listofbooks";
import { useSelector } from "react-redux";

function ManageBook() {
  const mybooks = useSelector((state) => state.reducerManageBooks);

  return (
    <>
      <div style={{ display: "flex" }}>
        <StatsPanel
          heading="Total Books"
          total={mybooks && mybooks.books ? mybooks.books.length : 0}
        />
        <StatsPanel
          heading="Available Books"
          total={
            mybooks && mybooks.books
              ? mybooks.books.filter((x) => x.status == "Available").length
              : 0
          }
        />
      </div>

      <AddBook />

      <Listofbooks />
    </>
  );
}

export default ManageBook;
