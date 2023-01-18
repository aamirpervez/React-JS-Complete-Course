import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [employees, setEmployees] = useState();
  const employeesCollectionRef = collection(db, "employees");

  const [newID, setNewID] = useState("");
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newSalary, setNewSalary] = useState("");
  const [newdepartment, setNewdepartment] = useState("");

  const getEmployees = async () => {
    const data = await getDocs(employeesCollectionRef);
    setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const createEmployee = async () => {
    if (newID.length < 1) {
      await addDoc(employeesCollectionRef, {
        name: newName,
        age: newAge,
        email: newEmail,
        salary: Number(newSalary),
        Department: newdepartment,
      });
    } else {
      //Update an Employee

      const employeeDoc = doc(db, "employees", newID);

      const newFields = {
        name: newName,
        age: newAge,
        email: newEmail,
        salary: Number(newSalary),
        Department: newdepartment,
      };

      await updateDoc(employeeDoc, newFields);
    }

    setTimeout(getEmployees, 1000);

    setNewID("");
    setNewName("");
    setNewAge("");
    setNewEmail("");
    setNewSalary("");
    setNewdepartment("");
  };

  const UpdateEmployee = (emp) => {
    setNewID(emp.id);
    setNewName(emp.name);
    setNewAge(emp.age);
    setNewEmail(emp.email);
    setNewSalary(emp.salary);
    setNewdepartment(emp.Department);
  };

  const deleteEmployee = async (id) => {
    const empDoc = doc(db, "employees", id);
    await deleteDoc(empDoc);

    setTimeout(getEmployees, 1000);
  };

  return (
    <div className="App">
      <h1>Complete Curd opertions using firebase database.</h1>
      <div className="createEmployee">
        <input
          placeholder="Enter Name"
          value={newName}
          onChange={(event) => {
            setNewName(event.target.value);
          }}
        ></input>
        <br />
        <input
          placeholder="Enter Age"
          value={newAge}
          onChange={(event) => {
            setNewAge(event.target.value);
          }}
        ></input>
        <br />

        <input
          placeholder="Enter Email"
          value={newEmail}
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
        ></input>
        <br />

        <input
          placeholder="Enter Salary"
          type="number"
          value={newSalary}
          onChange={(event) => {
            setNewSalary(event.target.value);
          }}
        ></input>
        <br />

        <input
          placeholder="Enter Department"
          value={newdepartment}
          onChange={(event) => {
            setNewdepartment(event.target.value);
          }}
        ></input>
        <br />
        <br />

        <button onClick={createEmployee}>Create Employee</button>
        <button>Cancel Changes</button>
      </div>
      <div>
        <ul>
          {employees &&
            employees.map((emp) => {
              return (
                <li className={"employee"}>
                  <h3>Name: {emp.name}</h3>
                  <h3>Age: {emp.age}</h3>
                  <h3>Email: {emp.email}</h3>
                  <h3>Salary: {emp.salary}</h3>
                  <h3>Department: {emp.Department}</h3>

                  <button
                    onClick={() => {
                      UpdateEmployee(emp);
                    }}
                  >
                    Edit Employee
                  </button>

                  <button
                    onClick={() => {
                      deleteEmployee(emp.id);
                    }}
                  >
                    Delete Employee
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
