import React, { useEffect } from "react";
import axios from "axios";

const Main = () => {
  function fetchData() {
    axios({
      url: "/",
      method: "post",
      data: {
        test: "123",
        arr: [1, 2, 3],
      },
      baseURL: "http://localhost:8081/",
      withCredentials: true,
    }).then((response) => {
      console.log(response);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return <div>Main</div>;
};

export default Main;
