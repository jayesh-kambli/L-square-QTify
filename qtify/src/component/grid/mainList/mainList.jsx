import React, { useEffect, useState } from "react";
import "./mainList.style.css";
import Card from "../card/card";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Navigation module directly
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stack from '@mui/material/Stack';

export default function MainList({ data, key }) {
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    function mainListedData() {
      console.log(data);
    }
    mainListedData();
  }, [data]);

  const goNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  return (
    <>
      <div className="maindiv" key={key}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          >
        <h3 className="albumType">Top Albums</h3>
        <h4 className="albumType green">Show all</h4>
        </Stack>
        <div>
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={9}
            //   centeredSlides={true}
            initialSlide={data.length - 1}
            spaceBetween={30}
            navigation={false} // Disable default navigation
            modules={[Navigation]}
            className="mySwiper adjustSwiper"
          >
            {/* <SwiperSlide className="firstSlide"></SwiperSlide> */}
            {data.map((album) => (
              <SwiperSlide key={album.id}>
                <Card
                  img={album.image}
                  follow={album.follows + " Follows"}
                  title={album.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="adjustSwiperPreBtn" onClick={goPrev}>
            <ArrowBackIosIcon className="arrow" />
          </div>
          <div className="adjustSwiperNextBtn" onClick={goNext}>
            <ArrowForwardIosIcon className="arrow" />
          </div>
        </div>
      </div>
    </>
  );
}
