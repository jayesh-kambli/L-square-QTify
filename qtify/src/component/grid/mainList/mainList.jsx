import React, { useEffect, useState } from "react";
import "./mainList.style.css";
import Card from "../card/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stack from "@mui/material/Stack";
import Tab from "./../tab/tab";
import Context from "./../context";

export default function MainList({ data, Name, Type, Filters }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [filterName, filterNameFn] = useState(null);
  const [filterArray, filterArrayFn] = React.useState("all");

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

  // useEffect(() => {
  //   console.log("this ==>", filterArray)
  // }, [filterArray])

  return (
    <>
      {Type == "Album" ? (
        <div className="maindiv">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <h3 className="albumType">{Name}</h3>
            <h4 className="albumType green">Show all</h4>
          </Stack>
          <div>
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={9}
              //   centeredSlides={true}
              initialSlide={data.length}
              spaceBetween={30}
              navigation={false} // Disable default navigation
              modules={[Navigation]}
              className="mySwiper adjustSwiper"
              breakpoints={{
                400: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                1300: {
                  slidesPerView: 7,
                },
                1600: {
                  slidesPerView: 9,
                },
              }}
            >
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
      ) : (
        <div className="maindiv">
          <Context.Provider value ={{filterArray, filterArrayFn}}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <h3 className="albumType">{Name}</h3>
            {/* <h4 className="albumType green">Show all</h4> */}
          </Stack>
          <div>
          <Tab allFilters={[...Filters]} allSongs={[...data]}/>
            <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={9}
            //   centeredSlides={true}
            initialSlide={data.length}
            spaceBetween={30}
            navigation={false} // Disable default navigation
            modules={[Navigation]}
            className="mySwiper adjustSwiper"
            breakpoints={{
                400: {
                    slidesPerView: 2,
                  },
                768: {
                  slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                  },
                1300: {
                  slidesPerView: 7,
                },
                1600: {
                    slidesPerView: 9,
                  },
            }}
          >
            {data.map((song) => ( filterArray == "all" ? (
              <SwiperSlide key={song.id}>
                <Card
                  img={song.image}
                  follow={song.likes + " Likes"}
                  title={song.title}
                />
              </SwiperSlide>
            ): (
              song.genre.key == filterArray ? (
                <SwiperSlide key={song.id}>
                <Card
                  img={song.image}
                  follow={song.likes + " Likes"}
                  title={song.title}
                />
              </SwiperSlide>
              ) : (
                <></>
              )
            )
            ))}
          </Swiper>
            <div className="adjustSwiperPreBtn" onClick={goPrev}>
              <ArrowBackIosIcon className="arrow" />
            </div>
            <div className="adjustSwiperNextBtn" onClick={goNext}>
              <ArrowForwardIosIcon className="arrow" />
            </div>
          </div>
          </Context.Provider>
        </div>
      )}
    </>
  );
}
