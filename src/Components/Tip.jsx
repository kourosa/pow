import React from "react";

export default props => (
  <div>
    <div className="tipStyle">
      <button onClick={() => props.onAddBox(props.item.ID)}>Box</button>
      <button onClick={() => props.onAddContainer(props.item.ID)}>Con</button>
      <svg
        className="triangleStyle"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M 0 100 L 50 0 L 100 100 Z" />
      </svg>
    </div>
  </div>
);
