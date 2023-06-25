
import React, { useEffect, useState } from 'react'
import axios from 'axios';
function MyHistory() {
	const [data, setData] = useState([]);
	 useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get(
           "https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Btitle%7D",
           {
             headers: {
               "X-RapidAPI-Key":
                 "6914d82daamsh38c949137eb96bcp10d275jsn2ad49417f3db",
               "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
             },
           }
         );
         setData(response.data.results);
       } catch (error) {
         console.error(error);
       }
     };

     fetchData();
   }, []);
 
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {/* <h1>{item.primaryImage.with}</h1> */}
          {item.primaryImage && <img src={item.primaryImage.url} alt="" />}
          <h1>{item.titleText.text}</h1>
        </div>
      ))}
    </div>
  );
}

export default MyHistory
