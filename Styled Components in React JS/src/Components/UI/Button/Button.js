// import style from "./Button.module.css";
// import style2 from "./Test.module.css";

import styled from "styled-components";

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #01245e;
  color: white;
  background: #01245e;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #02326d;
    border-color: #02326d;
    box-shadow: 0 0 8px rgba(43, 16, 16, 0.26);
  }
`;

// const Button = (props) => {
//   return (
//     <button type={props.type} className={style.button} onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
