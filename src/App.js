import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import proPic from "../src/assets/propic.jpg";
import "./App.css";

// import required modules
import { EffectCube, Pagination, Navigation, Mousewheel } from "swiper";

const App = () => {
  const data = [
    {
      title: "Kabelo Leboa",
      description: "I'm a software developer and this is my portfolio site",
      info: `A web developer is a programmer who specializes in, or is
      specifically engaged in, the development of World Wide Web
      applications, or applications that are run over HTTP from a
      web server to a web browser.`,
      image: proPic,
      color: "blue",
    },
    {
      title: "Projects",
      description: "These are projects I have worked on",
      info: `A web developer is a programmer who specializes in, or is
      specifically engaged in, the development of World Wide Web`,
      image: "#",
      color: "purple",
    },
  ];

  const colorArray = ["red", "green", "yellow", "blue", "purple"];
  const colorSelected = colorArray[Math.floor(Math.random() * 5) + 1];

  const CustomNavigation = () => {
    const swiper = useSwiper();
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          paddingTop: "10px",
        }}
      >
        <button
          className="swingButton"
          onClick={() => swiper.slideNext()}
          style={{
            boxShadow: ` 0 0 .2rem #fff,
      0 0 .2rem #fff,
      0 0 2rem ${colorSelected},
      0 0 0.8rem ${colorSelected},
      0 0 2.8rem ${colorSelected},
      inset 0 0 1.3rem ${colorSelected}`,
            color: `#fff`,
            fontSize: 20,
          }}
        >
          next
        </button>
        <button
          className="swingButton"
          onClick={() => swiper.slidePrev()}
          style={{
            boxShadow: ` 0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 2rem ${colorSelected},
    0 0 0.8rem ${colorSelected},
    0 0 2.8rem ${colorSelected},
    inset 0 0 1.3rem ${colorSelected}`,
            color: `#fff`,
            fontSize: 20,
          }}
        >
          previous
        </button>
      </div>
    );
  };
  return (
    <div className="App-header">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: false,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        mousewheel={true}
        modules={[EffectCube, Pagination, Navigation, Mousewheel]}
        className="mySwiper"
        style={{ maxWidth: "80%", minWidth: "50%", height: "100%" }}
      >
        {data.map((res) => {
          return (
            <SwiperSlide key={res.title}>
              <div
                className="box"
                style={{
                  boxShadow: ` 0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem ${res.color},
              0 0 0.8rem ${res.color},
              0 0 2.8rem ${res.color},
              inset 0 0 1.3rem ${res.color}`,
                }}
              >
                <img src={res.image} alt="" className="box-img" />
                <h1
                  style={{
                    animation: ` flicker-${res.color} 1.5s infinite alternate`,
                  }}
                >
                  {res.title}
                </h1>
                <h4>{res.description}</h4>
                <h5>{res.info}</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-facebook-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-twitter-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i
                        className="fa fa-google-plus-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
              <CustomNavigation />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default App;
