import React from "react";
import { useEffect, useState } from "react";
const Properties_API = () => {
  useEffect(() => {
    getAPI();
  }, []);

  const [d, getData] = useState([{}]);

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
      const data = await res.json();
      console.log(data.hits);
      console.log(d);
      getData(data.hits);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>Properties_API</div>
      <div>
        {d.map((item, id) => (
          <div key={id}>{item.agency.name}</div>
        ))}
      </div>
    </>
  );
};

export default Properties_API;
