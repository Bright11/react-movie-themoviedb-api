import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { movieimg } from './Url';
import "./slider.css";
import responsive from './slidersettings';
import { Link } from 'react-router-dom';
function TrendingSlider({ data }) {
  // https://www.npmjs.com/package/react-multi-carousel
  return (
    <div className="sliderpage">
      <h1>trendding Movies</h1>
      <Carousel infinite={true} autoPlay={true} responsive={responsive}>
        {data?.map((d) => (
          <div className="slider-content">
            <Link to="#">
              <div className="sliderimgdiv">
                <img src={`${movieimg}${d.backdrop_path}`} alt="" />
              </div>
              <h1>{d.title}</h1>
            </Link>
            <div className="decription">
              <p>{d.overview}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TrendingSlider;
