import React, { useEffect, useState } from "react";
import "./grid.style.css";
import axios from "axios";
import Card from "./card/card";
import MainList from "./mainList/mainList";

export default function Grid() {
    const [data, dataFn] = useState([]);
    const [data2, dataFn2] = useState([]);
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

        axios
        .get("https://qtify-backend-labs.crio.do/albums/new")
        .then((response) => {
            dataFn2(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    onload();
  }, []);


  return (
    <>
    <MainList data={[...data]} Name={"Top Albums"}/>
    <MainList data={[...data2]} Name={"New Albums"}/>
    </>
  );
}
