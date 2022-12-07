import React, { useState } from "react";
import "./StudentsRecords.css";
import CompositionComponent from "./CompositionComponent";

function StudentsRecords(props) {
  const [name, setName] = useState(props.stdName);

  console.log("Component executed. because of use State...");
  //1. Value we  are describing.
  //2. FUnction which is updating the value...

  const editRecord = () => {
    setName("new name Updated");
    console.log(name);
  };

  return (
    <div>
      <CompositionComponent className="student_number">
        <div>{props.id}</div>
        <div className="student_fullname">{name}</div>
        <div style={{ display: "flex" }}>
          <button className="edit_btn" onClick={editRecord}>
            Edit
          </button>
          <div className="student_details">Details</div>
        </div>
      </CompositionComponent>
    </div>
  );
}

export default StudentsRecords;
