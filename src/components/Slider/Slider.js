import React, { Component } from "react";
import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.png";
import product5 from "../../images/product5.png";
class Slider extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="w-100">
          <div className="w-100 relative flex justify-center">
            <img
              src={product1}
              style={{ width: "100%", height: "470px", objectFit: "contain" }}
              alt=""
            />
          </div>
          <div className="flex flex-wrap">
            <div className="w-5 flex justify-center align-center">
              <img
                src={process.env.PUBLIC_URL + "/images/leftArrow2.svg"}
                width={20}
                height={20}
                alt=""
              />
            </div>
            <div className="flex w-90 flex">
              <div className="w-25 px">
                <img
                  src={product2}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "contain",
                  }}
                  alt=""
                />
              </div>
              <div className="w-25 px">
                <img
                  src={product3}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "contain",
                  }}
                  alt=""
                />
              </div>
              <div className="w-25 px">
                <img
                  src={product4}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "contain",
                  }}
                  alt=""
                />
              </div>
              <div className="w-25 px">
                <img
                  src={product5}
                  style={{
                    width: "100%",
                    height: "120px",
                    objectFit: "contain",
                  }}
                  alt=""
                />
              </div>
            </div>
            <div className="w-5 flex justify-center align-center">
              <img
                src={process.env.PUBLIC_URL + "/images/rightArrow2.svg"}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Slider;
