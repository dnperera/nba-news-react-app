import React from "react";
import { Link } from "react-router-dom";
import "../../../css/button.css";

const Button = props => {
  let template = null;
  switch (props.type) {
    case "loadmore":
      template = (
        <div className="blue_btn" onClick={props.loadMore}>
          {props.cta}
        </div>
      );
      break;
    case "linkTo":
      template = (
        <Link className="blue_btn" to={props.linkTo}>
          {props.cta}
        </Link>
      );
      break;

    default:
      template = null;
      break;
  }
  return template;
};
export default Button;
