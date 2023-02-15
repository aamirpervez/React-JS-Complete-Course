import { createContext } from "react";
import "../examples.css";
import ChildcomponentOne from "./ChildcomponentOne";

const FirstName = createContext();
const LastName = createContext();

const ParentContextApi = () => {
  return (
    <div className="Heading">
      <FirstName.Provider value={"React JS"}>
        <LastName.Provider value={"Developer"}>
          <ChildcomponentOne />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
};

export default ParentContextApi;
export { FirstName, LastName };

//createContext
//provides
// consumer
