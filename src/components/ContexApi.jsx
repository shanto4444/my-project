import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const apiData = createContext();

const ContexApi = ({ children }) => {
  let [apiInfo, setApiInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=0")
      .then((res) => setApiInfo(res.data.products));
  }, []);

  return (
    <>
      <apiData.Provider value={apiInfo}> {children} </apiData.Provider>
    </>
  );
};

export { apiData, ContexApi };
