import { useEffect, useRef, useState } from "react";
import "./examples.css";

const UseEffectsHook = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [login, setlogin] = useState(true);

  const localstorageName = localStorage.getItem("username");

  const bindName = (e) => {
    setname(e.target.value);
    localStorage.setItem("username", name);
  };

  //   useEffect(() => {
  //     console.log("use effect hit!");
  //   });

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("main effect");
      if (name.length > 4 && name.length < 7) {
        setlogin(false);
      } else {
        setlogin(true);
      }
    }, 1000);

    return () => {
      console.log("clean up");
      clearTimeout(timer);
    };
  }, [name]);

  useEffect(() => {
    if (localstorageName.length > 0) {
      setname(localstorageName);
    }
  }, []);

  const bindEmail = (e) => {
    setemail(e.target.value);
    localStorage.setItem("email", email);
  };

  const buttonClick = () => {
    if (name.length > 0 && email.length > 0) {
      setname("");
      setemail("");

      localStorage.removeItem("username");
      localStorage.removeItem("email");

      alert("Logged In successfully!");
    }
  };

  return (
    <div className="Heading">
      <h1>Use Effect Hook in React JS</h1>
      <table style={{ margin: "0 auto" }}>
        <tr>
          <td>Name</td>
          <td>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={bindName}
            />
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <input
              type="text"
              placeholder="Enter Email"
              onChange={bindEmail}
              value={email}
            />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input
              type="submit"
              value="Log In"
              onClick={buttonClick}
              disabled={login}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default UseEffectsHook;
