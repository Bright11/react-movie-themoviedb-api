import axios from "axios";
import React, { useEffect, useState } from "react";
import { discovermovies, moviegenre, movieimg, popularurl } from "./Url";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "./slidersettings";
import { Link } from "react-router-dom";

function Discovermovies() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apikey = "api_key=8cf1ea8253dc60fc82c2d83d42b81a48";
        const accessToken =
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2YxZWE4MjUzZGM2MGZjODJjMmQ4M2Q0MmI4MWE0OCIsInN1YiI6IjYzMjBkZDdhYzFmZmJkMDA3ZDI0YTg2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0tFxq6j5hdN5auHQSX6YtGdotS9dZ1odWIr4fGHAO_o";
        const response = await axios
          .get(
            `${discovermovies}?${apikey}>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((response) => {
            setData(response.data.results);
          });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [data]);
  return (
    <div className="sliderpage">
      <h1>Discover Movies</h1>
      <Carousel infinite={true} autoPlay={true} responsive={responsive}>
        {data?.map((d) => (
          <div className="slider-content">
            <Link to={`details/${d.id}`}>
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

export default Discovermovies;
