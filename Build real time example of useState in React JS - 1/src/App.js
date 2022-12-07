import logo from "./logo.svg";
import StudentsRecords from "./Components/StudentsRecords";
import CreateStudent from "./Components/CreateStudent/CreateStudent";

function App() {
  const stdRecords = [
    {
      code: Math.floor(1000 + Math.random() * 9000),
      stdName: "Aamir Pervez",
      age: 31,
      email: "aamirpervez27@abc.com",
    },
    {
      code: Math.floor(1000 + Math.random() * 9000),
      stdName: "James Clerk",
      age: 23,
      email: "jamesclerk@abc.com",
    },
    {
      code: Math.floor(1000 + Math.random() * 9000),
      stdName: "Sara Albert",
      age: 34,
      email: "saraalbert@abc.com",
    },
  ];

  const onSaveStudentData = (studentData) => {
    console.log("Apps js ");
    console.log(studentData);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add event listeners to html elements in React JS</h1>
      {/* <h3>using Material UI Controls in React JS</h3> */}

      <CreateStudent onSaveStudentData={onSaveStudentData} />
      <StudentsRecords
        id={stdRecords[0].code}
        stdName={stdRecords[0].stdName}
        age={stdRecords[0].age}
        email={stdRecords[0].email}
      />

      <StudentsRecords
        id={stdRecords[1].code}
        stdName={stdRecords[1].stdName}
        age={stdRecords[1].age}
        email={stdRecords[1].email}
      />
      <StudentsRecords
        id={stdRecords[2].code}
        stdName={stdRecords[2].stdName}
        age={stdRecords[2].age}
        email={stdRecords[2].email}
      />
    </div>
  );
}

export default App;
