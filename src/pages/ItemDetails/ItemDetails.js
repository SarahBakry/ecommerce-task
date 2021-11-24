import React, { Component } from "react";
import Card from "../../components/Card/Card";
import Slider from "../../components/Slider/Slider";
import brandLogo from "../../images/brandLogo.svg";
import color1 from "../../images/color1.png";
import color2 from "../../images/color2.png";
class ItemDetails extends Component {
  render() {
    return (
      <div className="w-100">
        <div className="container flex flex-wrap py-3">
          <div className="w-50  ">
            <Slider />
          </div>
          <div className="w-50  px-4 py">
            <div className="w-100 flex flex-wrap">
              <div className="w-100">
                <img src={brandLogo} width={45} height={45} alt="" />
              </div>
              <div className="w-100 weight-medium fz-14">
                <p className="w-70 m-0 py">
                  Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit.
                </p>
              </div>
              <p className="w-70 m-0 py font-lightGray weight-medium fz-14">
                Men
              </p>
              <div className="w-100 flex py">
                <div className="flex">
                  <img
                    src={process.env.PUBLIC_URL + "/images/filledStar.svg"}
                    alt=""
                    width={15}
                    height={15}
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/filledStar.svg"}
                    alt=""
                    width={15}
                    height={15}
                    className="ms"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/filledStar.svg"}
                    alt=""
                    width={15}
                    className="ms"
                    height={15}
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/filledStar.svg"}
                    alt=""
                    width={15}
                    className="ms"
                    height={15}
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/filledStar.svg"}
                    alt=""
                    width={15}
                    className="ms"
                    height={15}
                  />
                </div>
                <div className="fz-14 bold px-2">4.9 of 5</div>
                <div className="fz-12 weight-medium flex align-center font-gray ">
                  22 Rates
                </div>
              </div>
              <div className="flex w-100 border-b-lightGray pb-2">
                <div className="flex font-secondary bold fz-20 py">
                  9,999{" "}
                  <span className="fz-14 weight-medium flex align-end py px-1">
                    LE
                  </span>
                </div>
                <div className="flex align-center font-lightGray line-through fz-12 p-1">
                  9,999 LE
                </div>
                <div className="flex align-center px-1">
                  <div className="bg-primary p fz-12 border-radius-3 weight-medium">
                    30% off
                  </div>
                </div>
              </div>
              <div className="w-100 bold fz-14 py-1">Size</div>
              <div className="w-100 font-secondary fz-10 bold py-1 flex  border-b-lightGray">
                <p className="circle-50 border flex align-center justify-center">
                  Small
                </p>
                <p className="circle-50 border flex align-center ms-1 justify-center">
                  Medium
                </p>
                <p className="circle-50 border flex align-center ms-1 justify-center">
                  Large
                </p>
                <p className="circle-50 border flex align-center ms-1 justify-center">
                  X Large
                </p>
                <p className="circle-50 border flex align-center ms-1 justify-center selected-size">
                  XX Large
                </p>
              </div>
              <div className="w-100 bold fz-14 py-1">Color</div>
              <div className="w-100 py-1 flex flex-wrap border-b-lightGray ">
                <img
                  src={color1}
                  width={70}
                  height={70}
                  className="selected-image "
                  alt=""
                />
                <img
                  src={color2}
                  width={70}
                  height={70}
                  className="ms-1 "
                  alt=""
                />
              </div>
              <div className="w-100 bold fz-14 py-1">Quantity</div>

              <div className="w-100 py">
                <div className="w-50 br-20 bg-lightGray2 flex justify-between p">
                  <div className="bg-primary circle-25 flex align-center justify-center">
                    <img
                      src={process.env.PUBLIC_URL + "/images/minus.svg"}
                      alt=""
                    />
                  </div>
                  <label className="font-secondary bold fz-14 flex align-center justify-center">
                    0
                  </label>
                  <div className="bg-primary circle-25 flex align-center justify-center">
                    <img
                      src={process.env.PUBLIC_URL + "/images/plus.svg"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-100 flex-wrap">
                <div className="w-50 py-2">
                  <div className="w-100 bg-secondary flex justify-center align-center fz-12 br-20 p-1 font-white bold">
                    Add To Cart
                  </div>
                </div>
                <div className="w-50 px-1 py-2">
                  <div className="w-100 bg-primary flex justify-center align-center fz-12 br-20 p-1 bold">
                    Pickup From Store
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 py-2">
            <h3 className="font-secondary m-0">Similar Products</h3>
            <p className="font-lightGray fz-14 py m-0">
              You may like these products also
            </p>
            <div className="w-100 scroll-x-secondary flex justify-between py-2">
              <div className="" style={{ width: "220px" }}>
                <Card />
              </div>
              <div className="ms-2" style={{ width: "220px" }}>
                <Card />
              </div>
              <div className="ms-2" style={{ width: "220px" }}>
                <Card />
              </div>
              <div className="ms-2" style={{ width: "220px" }}>
                <Card />
              </div>
              <div className="ms-2" style={{ width: "220px" }}>
                <Card />
              </div>
              <div className="ms-2" style={{ width: "220px" }}>
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemDetails;
