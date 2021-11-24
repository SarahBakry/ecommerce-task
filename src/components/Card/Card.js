import React, { Component } from "react";
import similarProduct1 from "../../images/similarProduct1.png";
import brandLogo from "../../images/brandLogo.svg";
class Card extends Component {
  render() {
    return (
      <div className="w-100 flex flex-wrap  border darkShadow p border-radius-5">
        <div className="w-100 relative">
          <img
            src={similarProduct1}
            alt=""
            style={{ width: "210px", height: "210px", objectFit: "contain" }}
          />
          <div className="icon-360 flex align-center justify-center">
            <img
              src={process.env.PUBLIC_URL + "/images/icon360.svg"}
              alt=""
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className="w-90 p">
          <p className="fz-12 bold m-0">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className="w-100 flex justify-between">
          <div className="flex flex-wrap px">
            <div className="flex font-secondary bold fz-16">
              9,999{" "}
              <span className="fz-12 weight-medium flex align-end p">LE</span>
            </div>
            <div className="w-100 flex">
              <div className="flex align-center font-lightGray line-through fz-12 ">
                9,999 LE
              </div>
              <div className="flex align-center px-1">
                <div
                  className="bg-primary fz-10 border-radius-3 weight-medium"
                  style={{ padding: "2px" }}
                >
                  30% off
                </div>
              </div>
            </div>
          </div>
          <div className="flex align-center px">
            <img src={brandLogo} alt="" width={50} height={45} />
          </div>
        </div>
        <div className="w-100 flex justify-center py">
          <div className="flex">
            <img
              src={process.env.PUBLIC_URL + "/images/filledStar.svg"}
              alt=""
              width={12}
              height={12}
            />
            <img
              src={process.env.PUBLIC_URL + "/images/filledStar.svg"}
              alt=""
              width={12}
              height={12}
              className="ms"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/filledStar.svg"}
              alt=""
              width={12}
              className="ms"
              height={12}
            />
            <img
              src={process.env.PUBLIC_URL + "/images/filledStar.svg"}
              alt=""
              width={12}
              className="ms"
              height={12}
            />
            <img
              src={process.env.PUBLIC_URL + "/images/filledStar.svg"}
              alt=""
              width={12}
              className="ms"
              height={12}
            />
            <div className="fz-12 bold px-1">4.9 of 5</div>
          </div>
        </div>
        {false ? (
          <div className="w-100 flex justify-center fz-10 weight-medium pb-1">
            <p className=" m-0">
              Pickup From:
              <span className="bold px fz-12">Genena Mall</span>
            </p>
          </div>
        ) : (
          <div className="w-100 flex justify-between px fz-10 weight-medium pb-1">
            <p className=" m-0">
              From:
              <span className="bold px fz-12">UK</span>
            </p>
            <p className=" m-0">
              To:
              <span className="bold px fz-12">Egypt</span>
            </p>
            <p className=" m-0">
              In:
              <span className="bold px fz-12">2 Days</span>
            </p>
          </div>
        )}
      </div>
    );
  }
}
export default Card;
