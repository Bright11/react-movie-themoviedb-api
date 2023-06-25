import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { moviedetails } from './Url';

function MovieDtails() {
	const { details } = useParams()
	  const [detaildata, setDetaildata] = useState();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const apikey = "api_key=8cf1ea8253dc60fc82c2d83d42b81a48";
          const accessToken =
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2YxZWE4MjUzZGM2MGZjODJjMmQ4M2Q0MmI4MWE0OCIsInN1YiI6IjYzMjBkZDdhYzFmZmJkMDA3ZDI0YTg2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0tFxq6j5hdN5auHQSX6YtGdotS9dZ1odWIr4fGHAO_o";
          const response = await axios
            .get(
              `${moviedetails}lists/${details}?${apikey}`,
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            )
            .then((response) => {
              setDetaildata(response.data);
            });
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, []);
  console.log("ddd", detaildata);
  return <div>{detaildata.genres.name}</div>;
}

export default MovieDtails
