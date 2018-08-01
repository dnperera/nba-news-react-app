import React from "react";
import Slider from "./widgets/newsSlider/slider";
import NewsList from "./widgets/newsList/newsList";

const Home = () => {
  return (
    <div>
      <Slider type="featured" start={0} amount={3} settings={{ dots: false }} />

      <NewsList />
    </div>
  );
};
export default Home;
