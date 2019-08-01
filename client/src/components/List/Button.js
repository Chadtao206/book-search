import React from "react";

export const Button = props => (
  <button {...props} className="btn btn-default saveBtn" >{props.children}</button>
);