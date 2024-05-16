import React, { useEffect, useState } from "react";
import "./grid.style.css";
import axios from "axios";
import Card from "./card/card";
import MainList from "./mainList/mainList";
import { topAlbum, newAlbum } from "./../../api/api";

export default function Grid() {
  const [data, dataFn] = useState([]);
  const [data2, dataFn2] = useState([]);
  const [layout, layoutFn] = useState();

  useEffect(() => {
    const fetchTopAlbum = async () => {
      const RawData = await topAlbum();
      dataFn(RawData);

      const RawData2 = await newAlbum();
      dataFn2(RawData2);
    };

    fetchTopAlbum();

  }, []);

  return (
    <>
      <MainList data={[...data]} Name={"Top Albums"}/>
      <MainList data={[...data2]} Name={"New Albums"}/>
    </>
  );
}
