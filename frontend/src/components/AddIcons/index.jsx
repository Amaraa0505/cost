import React from "react";

const AddIcons = () => {
  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn "></summary>
        <div className="flex gap-2">
          <img src="PlusCircle.svg"></img>
          <p>Add category</p>
        </div>
        <ul>
          <div className="flex gap-2">
            <img src="House.svg"></img>
            <p>Home</p>
          </div>
          <div className="flex gap-2">
            <img src="Gift.svg"></img>
            <p>Gift</p>
          </div>
        </ul>
      </details>
    </div>
  );
};

export default AddIcons;
