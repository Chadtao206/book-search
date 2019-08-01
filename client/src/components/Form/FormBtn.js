import React from "react";

export const FormBtn = props => (
  <button {...props} className="btn btn-lg btn-info input-lg">
    {props.children || "Search"} 
  </button>
);
