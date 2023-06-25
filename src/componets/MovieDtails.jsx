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
          const apikey = "api_key=";
          const accessToken =
            "";
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
