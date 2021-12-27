import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [temp, setTemp] = useState({
    test: "123",
    arr: [1, 2, 3],
  });
  function fetchData() {
    axios.get("/api/test1").then((response) => console.log(response));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div>Main</div>;
};

export default Main;
