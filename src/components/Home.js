import React from "react";
import image from "../woman-holds-fashion-shopping-bag-beauty (2).jpg";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="image">
      <img src={image} width={1350} height={600} />
    </div>
  );
};

export default Home;
