import React, { Component } from "react";
import similarProduct1 from "../../images/similarProduct1.png";
import brandLogo from "../../images/brandLogo.svg";
import Rate from "../Rate/Rate.";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { item: undefined };
  }
  componentDidMount() {
    if (this.props.item) {
      this.setState({ item: this.props.item });
    }
  }
  render() {
    return (
      <div className="w-100 flex flex-wrap  border darkShadow p border-radius-5">
        {this.state.item ? (
          <>
            <div className="w-100 relative">
              <img
                src={this.state.item.imageSrc}
                alt=""
                style={{
                  width: "210px",
                  height: "210px",
                  objectFit: "contain",
                }}
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
              <p className="fz-12 bold m-0">{this.state.item.description}</p>
            </div>
            <div className="w-100 flex justify-between">
              <div className="flex flex-wrap px">
                <div className="flex font-secondary bold fz-16">
                  {this.state.item.priceAfterDiscount}
                  <span className="fz-12 weight-medium flex align-end p">
                    LE
                  </span>
                </div>
                {this.state.item.discountPercentage ? (
                  <div className="w-100 flex">
                    <div className="flex align-center font-lightGray line-through fz-12 ">
                      {this.state.item.price} LE
                    </div>
                    <div className="flex align-center px-1">
                      <div
                        className="bg-primary fz-10 border-radius-3 weight-medium"
                        style={{ padding: "2px" }}
                      >
                        {this.state.item.discountPercentage}% off
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="flex align-center px">
                <img
                  src={this.state.item.brandLogo}
                  alt=""
                  width={50}
                  height={45}
                />
              </div>
            </div>
            <div className="w-100 flex justify-center py">
              <Rate
                id={`similar${this.state.item.id}`}
                rateValue={this.state.item.rateValue}
                totalCountOfRates={this.state.item.totalCountOfRates}
              />
            </div>
            {this.state.item.storeAvailability ? (
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
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Card;
