import React from "react";
import { Button } from "./Button";
import "./ListItem.css";

export const ListItem = props => (
  <li className="list-group-item">
    <div className="card-deck">
        <div className="card">
            <div className="form horiz">
            <img className="coverImage" alt="coverimage" src={props.image || require("../../images/open_book.jpg")} />
                <Button id={props.id} className="btn btn-default saveBtn" onClick={props.click}>{props.buttonName}</Button>
                <a className="btn btn-info infoBtn" role="button" href={props.link} target="_blank">Book Info</a>
            </div>
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-title"> {props.author}</h6>
            <p className="card-text"> {props.description || "No description available for this title"}</p>
            </div>
        </div>
    </div>
  </li>
);
