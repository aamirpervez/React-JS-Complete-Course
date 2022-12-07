import React from "react";
import "./StudentsRecords.css";
import CustomDialog from "./CustomDialog";
import CompositionComponent from "./CompositionComponent";
import TestComponent from "./TestComponent";

function StudentsRecords(props) {
  const [open, setOpen] = React.useState(false);

  const showDetails = () => {
    setOpen(true);
  };

  const cancelPopup = () => {
    setOpen(false);
  };

  let fullname = props.stdName; //Aamir Pervez

  const editRecord = () => {
    fullname = "new name is updated";

    alert(fullname);
  };

  return (
    <div>
      <CustomDialog
        open={open}
        id={props.id}
        name={fullname}
        age={props.age}
        email={props.email}
        closepopup={cancelPopup}
      />

      <CompositionComponent className="student_number">
        <div>{props.id}</div>
        <div className="student_fullname">{fullname}</div>
        <button onClick={editRecord}>Edit</button>

        <div className="student_details" onClick={() => showDetails()}>
          Details
        </div>
      </CompositionComponent>

      {/* <TestComponent /> */}
    </div>
  );
}

export default StudentsRecords;
