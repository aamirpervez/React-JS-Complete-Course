import "./CreateStudent.css";
import React, { useState } from "react";

const CreateStudent = (props) => {
  const [stdCode, setStdCode] = useState("");
  const [stdName, setStdName] = useState("");
  const [stdAge, setStdAge] = useState("");
  const [stdEmail, setStdEmail] = useState("");

  const [userInput, setUserInput] = useState({
    stdCode: "",
    stdName: "",
    stdAge: "",
    stdEmail: "",
  });

  const stdCodeChangeHandler = (event) => {
    setStdCode(event.target.value); //1

    //  setUserInput({              2
    //   ...userInput,
    //   stdCode: event.target.value,
    // });

    //   setUserInput((prevState) => {                      3
    //       return { ...prevState, stdCode: event.target.value };
    //     });
  };


  
  const stdNameChangeHandler = (event) => {
    setStdName(event.target.value);
  };

  const stdAgeChangeHandler = (event) => {
    setStdAge(event.target.value);
  };

  const stdEmailChangeHandler = (event) => {
    setStdEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const studentData = {
      code: stdCode,
      name: stdName,
      age: stdAge,
      email: stdEmail,
    };

    // console.log(studentData);

    props.onSaveStudentData(studentData);

    setStdCode("");
    setStdName("");
    setStdAge("");
    setStdEmail("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="create__student__controls">
        <div className="create__student_control">
          <label>Code</label>
          <input
            type="text"
            maxLength={4}
            value={stdCode}
            onChange={stdCodeChangeHandler}
          />
        </div>

        <div className="create__student_control">
          <label>Name</label>
          <input type="text" value={stdName} onChange={stdNameChangeHandler} />
        </div>

        <div className="create__student_control">
          <label>Age</label>
          <input
            type="number"
            min={4}
            max={40}
            value={stdAge}
            onChange={stdAgeChangeHandler}
          />
        </div>

        <div className="create__student_control">
          <label>Email</label>
          <input
            type="Email"
            value={stdEmail}
            onChange={stdEmailChangeHandler}
          />
        </div>
      </div>

      <div className="create__students__action">
        <button type="submit">Create Student</button>
      </div>
    </form>
  );
};

export default CreateStudent;
