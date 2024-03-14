import React, { useState, useEffect } from "react";

const Properties_API = () => {
  useEffect(() => {
    getAPI();
  }, []);

  const [data, setData] = useState([]);

  const getAPI = async () => {
    const url =
      "https://realty-in-us.p.rapidapi.com/properties/v3/detail?property_id=4599450556";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e37de9475cmshc91754dee8d657cp1f9b19jsnf9309833a34a",
        "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
      },
    };

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
