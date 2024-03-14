import React, { useState, useEffect } from "react";

const Properties_API = () => {
  useEffect(() => {
    getAPI();
  }, []);

  const [data, setData] = useState([]);

  const getAPI = async () => {
    const res = await fetch(
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=3",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "e37de9475cmshc91754dee8d657cp1f9b19jsnf9309833a34a",
          "X-RapidAPI-Host": "bayut.p.rapidapi.com",
        },
      }
    );

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      setData([result.data.home]);

      console.log(result.data.home);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>Properties_API</div>
      <div>
        {data.map((property, index) => (
          <div key={index}>
            <div>{property.last_sold_price}</div>
            <img src={property.photos[0].href} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Properties_API;
