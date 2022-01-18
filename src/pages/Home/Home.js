import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const images = [
  "https://imagizer.imageshack.com/img922/8510/OKk15W.png",
  "https://imagizer.imageshack.com/img924/8761/4Oq3x5.jpg",
  "https://imagizer.imageshack.com/img922/8923/FmGyfZ.jpg",
  "https://imagizer.imageshack.com/img923/3599/Um4BtQ.jpg",
  "https://imagizer.imageshack.com/img922/4961/zW9Qhn.jpg",
  "https://imagizer.imageshack.com/img922/1576/3DRNJF.jpg",
];

const delay = 2500;

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => {
        return prev + 1 === images.length ? 0 : prev + 1;
      });
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="slide-show">
      <img src={images[activeIndex]}></img>
    </div>
  );
};

export default Home;
