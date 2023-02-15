import { useContext } from "react";
import ChildcomponentThree from "./ChildcomponentThree";
import { FirstName, LastName } from "./ParentContextApi";

const ChildcomponentTwo = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <h1>
      Hello, I am {fname} {lname} , using useContext.
    </h1>
  );

  // return <ChildcomponentThree />;
};

export default ChildcomponentTwo;
