import React from "react";
import Slick from "react-slick";
import { Link } from "react-router-dom";
import "../../../css/slider.css";
const SliderTemplates = props => {
  let template = null;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  switch (props.type) {
    case "featured":
      template = props.data.map((item, index) => {
        return (
          <div key={index}>
            <div className="featured_item">
              <div
                className="featured_image"
                style={{ background: `url(/images/articles/${item.image})` }}
              >
                {" "}
              </div>
              <Link to={"/articles/${item.id}"}>
                <div className="featured_caption">{item.title}</div>
              </Link>
            </div>
          </div>
        );
      });
      break;

    default:
      template = null;
      break;
  }
  return <Slick {...settings}>{template}</Slick>;
};
export default SliderTemplates;
