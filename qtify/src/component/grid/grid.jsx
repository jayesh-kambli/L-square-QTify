import React, { useEffect, useState } from "react";
import "./grid.style.css";
import axios from "axios";
import Card from "./card/card";
import MainList from "./mainList/mainList";

export default function Grid() {
    const [data, dataFn] = useState([]);
    const [layout, layoutFn] = useState();

  useEffect(() => {
    async function onload() {
      axios
        .get("https://qtify-backend-labs.crio.do/albums/top")
        .then((response) => {
            dataFn(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    onload();
  }, []);


  return (
    <>
    <MainList data={[...data]} key={"dsf"}/>
    <MainList data={[...data]} key={"fdw"}/>
    </>
  );
}
