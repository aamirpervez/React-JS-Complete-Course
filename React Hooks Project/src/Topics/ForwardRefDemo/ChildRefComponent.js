import { forwardRef } from "react";

const ChildRefComponent = (props, refFromParent) => {
  return (
    <div>
      <input type="text" ref={refFromParent} />
    </div>
  );
};

export default forwardRef(ChildRefComponent);
