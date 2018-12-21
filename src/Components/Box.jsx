import React from "react";
export default props => (
  <div
    className="boxStyle"
    onClick={e => props.onChangeColor(e)}
    onDoubleClick={() => props.onDelete(props.item)}
  >
    B
  </div>
);
