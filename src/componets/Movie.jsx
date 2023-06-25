import React, { useEffect, useState } from "react";
import axios from "axios";
import "./moviepage.css";
import { movieimg, trendingurl } from "./Url";
import TrendingSlider from "./TrendingSlider";
import Popularurl from "./Popularurl";
import Discovermovies from "./Discovermovies";

function Movie() {
	const [data, setData] = useState([]);
	const [isloading,setIsloading]= useState(false)
	// const url = "https://api.themoviedb.org/3/trending/movie/day";
  useEffect(() => {
	  const fetchData = async () => {
		
		try {
		
        const apikey = "api_key=8cf1ea8253dc60fc82c2d83d42b81a48";
		  const accessToken =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2YxZWE4MjUzZGM2MGZjODJjMmQ4M2Q0MmI4MWE0OCIsInN1YiI6IjYzMjBkZDdhYzFmZmJkMDA3ZDI0YTg2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0tFxq6j5hdN5auHQSX6YtGdotS9dZ1odWIr4fGHAO_o";
        const response = await axios
          .get(`${trendingurl}?${apikey}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((response) => {
            setIsloading(true);
            setData(response.data.results);
          });
       
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
console.log("myv",data)
  return (
    <div className="moviepage">
      {isloading ? (
        <div>
          <div className="trenddings">
            <TrendingSlider data={data} />{" "}
          </div>
             <div className="trenddings">
            <Popularurl />
          </div>
          <div className="trenddings">
            <Discovermovies/>
             </div>
        </div>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </div>
  );
}

export default Movie;
