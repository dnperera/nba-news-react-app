import React from "react";
import Slider from "./widgets/newsSlider/slider";
import NewsList from "./widgets/newsList/newsList";
import VideoList from "./widgets/videoList/videoList";

const Home = () => {
  return (
    <div>
      <Slider type="featured" start={0} amount={3} settings={{ dots: false }} />

      <NewsList type="card" loadmore={true} start={0} amount={3} />
      <VideoList
        type="card"
        title={true}
        loadmore={false}
        start={0}
        amount={3}
      />
    </div>
  );
};
export default Home;
