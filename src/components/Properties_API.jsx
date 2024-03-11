import React from "react";
import { useEffect, useState } from "react";
const Properties_API = () => {
  useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    const res = await fetch(
      "https://rentalsapi.zillowgroup.com/listings/v1/listingsForUser",
      {
        method: "GET",
      }
    );

    try {
      const data = await res.text();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return <div>Properties_API</div>;
};

export default Properties_API;
