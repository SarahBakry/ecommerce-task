import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <div className="w-100 bg-darkGray py-3 font-lightGray2 footer">
        <div className="container ">
          <div className="w-100 flex border-b">
            <div className="w-40 pb-2">
              <div className="flex flex-wrap w-100 border-end">
                <div className="w-100 ">
                  <img
                    src={process.env.PUBLIC_URL + "/images/footerLogo.svg"}
                    alt=""
                    width={130}
                    height={40}
                  />
                </div>
                <div className="w-90  fz-10 weight-medium">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                  <p>
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed dia
                  </p>
                  <p>
                    m nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                  </p>
                </div>
              </div>
            </div>
            <div className="w-60 p-3 flex flex-wrap pt-0">
              <p className="fz-12 bold m-0">Subscribe to our newsletter</p>
              <div className="w-100">
                <div className="subscribe-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Mail"
                  />
                  <button className="flex align-center px-2">
                    <div className="flex">
                      <div className=" fz-12 bold px-1">Subscribe</div>
                      <img
                        src={process.env.PUBLIC_URL + "/images/send.svg"}
                        alt=""
                        width={15}
                        height={15}
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-100 flex">
                <div className="w-60 border-end flex flex-wrap">
                  <Link className="link font-lightGray2 fz-12 w-100 py" to="/">
                    About Us
                  </Link>
                  <Link className="link font-lightGray2 fz-12 w-100 py" to="/">
                    Contact Us
                  </Link>
                  <Link className="link font-lightGray2 fz-12 w-100 py" to="/">
                    Track Order
                  </Link>
                  <Link className="link font-lightGray2 fz-12 w-100 py" to="/">
                    Terms & Conditions
                  </Link>
                  <Link className="link font-lightGray2 fz-12 w-100 py" to="/">
                    Privacy Policy
                  </Link>
                  <Link className="link font-lightGray2 fz-12 w-100 py" to="/">
                    Sell With Us
                  </Link>
                  <Link className="link font-lightGray2 fz-12 w-100 py" to="/">
                    Shipping And Returns
                  </Link>
                </div>
                <div className="w-40 px-2 ">
                  <div className="flex flex-wrap">
                    <Link
                      className="w-100 link font-lightGray2 fz-12 w-100 py flex align-center"
                      to="/"
                    >
                      <div className="flex">
                        <img
                          src={process.env.PUBLIC_URL + "/images/fb.svg"}
                          alt=""
                          width={25}
                          height={25}
                        />
                        <p className="px-2 m-0 fz-12 flex align-center">
                          /YESHTERY
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="w-100 link font-lightGray2 fz-12 w-100 py flex align-center"
                      to="/"
                    >
                      <div className="flex">
                        <img
                          src={process.env.PUBLIC_URL + "/images/linkedIn.svg"}
                          alt=""
                          width={25}
                          height={25}
                        />
                        <p className="px-2 m-0 fz-12 flex align-center">
                          /YESHTERY
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="w-100 link font-lightGray2 fz-12 w-100 py flex align-center"
                      to="/"
                    >
                      <div className="flex">
                        <img
                          src={process.env.PUBLIC_URL + "/images/insta.svg"}
                          alt=""
                          width={25}
                          height={25}
                        />
                        <p className="px-2 m-0 fz-12 flex align-center">
                          /YESHTERY
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="w-100 link font-lightGray2 fz-12 w-100 py flex align-center"
                      to="/"
                    >
                      <div className="flex">
                        <img
                          src={process.env.PUBLIC_URL + "/images/twitter.svg"}
                          alt=""
                          width={25}
                          height={25}
                        />
                        <p className="px-2 m-0 fz-12 flex align-center">
                          /YESHTERY
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-100 flex justify-between fz-12 pt-2">
            <div>© 2021 yeshtery, all rights reserved.</div>
            <div className="flex">
              <div className="">
                <img
                  src={process.env.PUBLIC_URL + "/images/cashOnDelivery.png"}
                  alt=""
                  width={80}
                  height={30}
                />
              </div>
              <div className="ms-1">
                <img
                  src={process.env.PUBLIC_URL + "/images/visa.png"}
                  alt=""
                  width={60}
                  height={30}
                />
              </div>
              <div className="ms-1">
                <img
                  src={process.env.PUBLIC_URL + "/images/masterCard.png"}
                  alt=""
                  width={60}
                  height={30}
                />
              </div>
            </div>
            <div className="flex">
              <div className=" flex align-center px-1">Powered by</div>
              <img
                src={process.env.PUBLIC_URL + "/images/nasnavLogo.svg"}
                alt=""
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
