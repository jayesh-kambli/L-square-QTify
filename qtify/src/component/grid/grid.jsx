import React, { useEffect, useState } from "react";
import "./grid.style.css";
import axios from "axios";
import Card from "./card/card";
import MainList from "./mainList/mainList";
import { topAlbum, newAlbum, genres, songs } from "./../../api/api";

export default function Grid() {
  const [data, dataFn] = useState([]);
  const [data2, dataFn2] = useState([]);
  const [data3, dataFn3] = useState([]);
  const [data4, dataFn4] = useState([]);
  const [type, typeFn] = useState([]);
  const [layout, layoutFn] = useState();

  useEffect(() => {
    const fetchTopAlbum = async () => {
      const RawData = await topAlbum();
      dataFn(RawData);

      const RawData2 = await newAlbum();
      dataFn2(RawData2);

      const RawData3 = await songs();
      dataFn3(RawData3);

      const RawData4 = await genres();
      dataFn4([{key	:	"all", label	:	"All" }, ...RawData4.data]);

    };

    fetchTopAlbum();

  }, []);


  return (
    <>
      <MainList data={[...data]} Name={"Top Albums"} Type={"Album"}/>
      <MainList data={[...data2]} Name={"New Albums"} Type={"Album"}/>
      <MainList data={[...data3]} Name={"Songs"} Type={"Songs"} Filters={data4}/>
    </>
  );
}
