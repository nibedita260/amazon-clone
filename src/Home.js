import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_Note9Pro/Dec/V184735168_WLM_Redmi_Note9Pro_DesktopTallHero_1500x600._CB414568566_.jpg"
          className="home_image"
          alt=""
        />
      </div>
      <div className="home__row">
        <Product
          id="11111"
          title="Your Orders"
          price={520}
          image="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png"
          rating={5}
        />
        <Product
          title="Your Orders"
          price={741}
          image="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png"
          rating={4}
        />
        <Product
          title="Your Orders"
          price={11.76}
          image="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          title="Your Orders"
          price={528}
          image="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png"
          rating={3}
        />
        <Product
          title="Your Orders"
          price={85075007}
          image="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png"
          rating={5}
        />
        <Product
          title="Your Orders"
          price={1111}
          image="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          title="Your Orders"
          price={1176}
          image="https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
