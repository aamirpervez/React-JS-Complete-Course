import logo from "./logo.svg";
import StudentsRecords from "./Components/StudentsRecords";

function App() {
  const stdRecords = [
    {
      id: 1,
      stdName: "Aamir Pervez",
      age: 31,
      email: "aamirpervez27@abc.com",
    },
    {
      id: 2,
      stdName: "James Clerk",
      age: 23,
      email: "jamesclerk@abc.com",
    },
    {
      id: 3,
      stdName: "Sara Albert",
      age: 34,
      email: "saraalbert@abc.com",
    },
    {
      id: 4,
      stdName: "Ravi Kumar",
      age: 31,
      email: "ravikumar@abc.com",
    },
    {
      id: 5,
      stdName: "Robert Kim",
      age: 12,
      email: "robertkim@abc.com",
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Add event listeners to html elements in React JS</h1>
      {/* <h3>using Material UI Controls in React JS</h3> */}
      <StudentsRecords
        id={stdRecords[0].id}
        stdName={stdRecords[0].stdName}
        age={stdRecords[0].age}
        email={stdRecords[0].email}
      />
      
      <StudentsRecords
        id={stdRecords[1].id}
        stdName={stdRecords[1].stdName}
        age={stdRecords[1].age}
        email={stdRecords[1].email}
      />
      <StudentsRecords
        id={stdRecords[2].id}
        stdName={stdRecords[2].stdName}
        age={stdRecords[2].age}
        email={stdRecords[2].email}
      />
    </div>
  );
}

export default App;
