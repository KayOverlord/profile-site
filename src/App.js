import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";

// import required modules
import { EffectCube, Pagination, Navigation, Mousewheel } from "swiper";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Data } from "../src/data/slideData";

const App = () => {
  const colorArray = ["red", "green", "yellow", "skyBlue", "purple"];
  const colorSelected = colorArray[Math.floor(Math.random() * 5) + 1];

  const CustomNavigation = () => {
    const swiper = useSwiper();
    return (
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          height: "100px",
          paddingTop: "12px",
        }}
      >
        {" "}
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
        {Data.map((res, index) => {
          return (
            <SwiperSlide key={res.title + index}>
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
                {res.image === "icon" ? (
                  res.iconName
                ) : (
                  <img
                    src={res.image}
                    alt=""
                    className="box-img"
                    style={{
                      boxShadow: ` 0 0 .2rem #fff,
              0 0 .2rem #fff,
              0 0 2rem ${res.color},
              0 0 0.8rem ${res.color},
              0 0 2.8rem ${res.color},
              inset 0 0 1.3rem ${res.color}`,
                    }}
                  />
                )}

                <h1
                  style={{
                    animation: ` flicker-${res.color} 1.5s infinite alternate`,
                  }}
                >
                  {res.title}
                </h1>
                <h4>{res.description}</h4>
                <h5>{res.info}</h5>
                {index === 0 ? (
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/kabelo-leboa-6bb27365/">
                        <BsLinkedin size={35} />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/kmystro">
                        <BsGithub size={36} />
                      </a>
                    </li>
                  </ul>
                ) : null}

                {res.link ? (
                  res.link
                ) : null}
              </div>
            </SwiperSlide>
          );
        })}
        <CustomNavigation />
      </Swiper>
    </div>
  );
};

export default App;
