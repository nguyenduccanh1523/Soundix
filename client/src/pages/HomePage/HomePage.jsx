import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.jpg";
import { WrapperProducts } from "./style";
const HomePage = () => {
  return (
    <div style={{ width: "1270px", margin: "0 auto", marginTop: "20px" }}>
      <div
        className="body"
        style={{ width: "100%", backgroundColor: "#fffff" }}
      >
        <div id="container" style={{ width: "1270px", margin: "0 auto" }}>
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <WrapperProducts>
                <CardComponent />
          </WrapperProducts>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
