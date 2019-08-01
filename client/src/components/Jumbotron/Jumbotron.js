import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className=" jumbotron jumbotron-fluid" {...props}>
        <h1>Google Book Search</h1>
        <h3>{props.message}</h3>
    </div>
);

export default Jumbotron;