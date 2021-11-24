import React, { Component } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../images/brandLogo.svg";
/* import menu from "../../../public/images/menu.svg"; */
class Navbar extends Component {
  componentDidMount() {
    console.log(process.env.PUBLIC_URL, "process.env.PUBLIC_URL");
  }
  render() {
    return (
      <div className="w-100">
        <div className="w-100 bg-primary darkShadow">
          <div className="container py flex justify-between flex-wrap">
            <div className="flex">
              <div className="flex align-center">
                <img
                  src={process.env.PUBLIC_URL + "/images/menu.svg"}
                  alt="Menu"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex align-center px-2">
                <img
                  src={process.env.PUBLIC_URL + "/images/logo.svg"}
                  alt="Menu"
                  width={75}
                  height={20}
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex align-center">
                <img
                  src={process.env.PUBLIC_URL + "/images/leftArrow1.svg"}
                  alt=""
                  width={20}
                  height={12}
                />
              </div>
              <label className="flex align-start fz-12 px-1 py ">
                Valentine’s Day Offers! Buy Two Get One Free
                <Link
                  className="link ps-1 weight-medium text-underline "
                  to="/"
                >
                  Shop Now
                </Link>
              </label>
              <div className="flex align-center">
                <img
                  src={process.env.PUBLIC_URL + "/images/rightArrow1.svg"}
                  alt=""
                  width={20}
                  height={12}
                />
              </div>
            </div>
            <div className="flex ">
              <div className="flex align-center ps-2">
                <div className="flex ">
                  <div className="flex align-center">
                    <img
                      src={process.env.PUBLIC_URL + "/images/contact.svg"}
                      alt=""
                      width={20}
                      height={18}
                    />
                  </div>
                  <label className="fz-12 weight-medium px-1">Contact Us</label>
                </div>
              </div>
              <div className="flex align-center ps-2">
                <div className="flex ">
                  <div className="flex align-center">
                    <img
                      src={process.env.PUBLIC_URL + "/images/trackOrder.svg"}
                      alt=""
                      width={20}
                      height={18}
                    />
                  </div>
                  <label className="fz-12 weight-medium px-1">
                    Track Order
                  </label>
                </div>
              </div>
              <div className="flex align-center ps-2">
                <div className="flex ">
                  <div className="flex align-center">
                    <img
                      src={process.env.PUBLIC_URL + "/images/location.svg"}
                      alt=""
                      width={20}
                      height={18}
                    />
                  </div>
                  <label className="fz-12 weight-medium ps-1">
                    Find A Store
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 darkShadow">
          <div className="container py-1 flex justify-between">
            <div className="flex align-center">
              <div class="left-inner-addon">
                <img
                  src={process.env.PUBLIC_URL + "/images/search.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
                <input type="text" class="form-control" placeholder="Search" />
              </div>
            </div>
            <div className="flex align-center">
              <img src={brandLogo} alt="" width={70} height={50} />
            </div>
            <div className="flex">
              <div className="flex px-2">
                <div className="flex align-center relative">
                  <img
                    width={30}
                    height={30}
                    src={process.env.PUBLIC_URL + "/images/bag.svg"}
                    alt=""
                  />
                  <div className="cart-count">9+</div>
                </div>
                <label className="flex align-center fz-14 bold ps-1">
                  Cart
                </label>
              </div>
              <div className="flex px-2">
                <div className="flex align-center">
                  <img
                    width={25}
                    height={25}
                    src={process.env.PUBLIC_URL + "/images/wishList.svg"}
                    alt=""
                  />
                </div>
                <label className="flex align-center fz-14 bold ps-1">
                  Wishlist
                </label>
              </div>
              <div className="flex ps-2">
                <div className="flex align-center ">
                  <img
                    width={20}
                    height={25}
                    src={process.env.PUBLIC_URL + "/images/client.svg"}
                    alt=""
                  />
                </div>
                <label className="flex align-center fz-14 bold ps-1">
                  Login
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 bg-black lightShadow">
          <div className="container py-1 flex justify-between">
            <Link className="link weight-medium font-white fz-16" to="/">
              Men
            </Link>
            <Link className="link ps-1 weight-medium font-white fz-16" to="/">
              Women
            </Link>
            <Link className="link ps-1 weight-medium font-white fz-16" to="/">
              Unisex
            </Link>
            <Link className="link ps-1 weight-medium font-white fz-16" to="/">
              Kids
            </Link>
            <Link className="link ps-1 weight-medium font-white fz-16" to="/">
              Best Sellers
            </Link>
            <Link className="link ps-1 weight-medium font-white fz-16" to="/">
              New Arrivals
            </Link>
            <Link className="link ps-1 weight-medium font-red fz-16" to="/">
              Offers
            </Link>
          </div>
        </div>
        <div className="w-100 py-2 border-b">
          <div className="container flex fz-12">
            <Link className="link weight-medium text-underline" to="/">
              Men
            </Link>
            <label className="weight-medium px-1">/</label>
            {/* Men / Clothing / Tops / Adidas / Adidas Black T-Shirt */}
            <Link className="link weight-medium text-underline" to="/">
              Clothing
            </Link>
            <label className="weight-medium px-1">/</label>
            <Link className="link weight-medium text-underline" to="/">
              Tops
            </Link>
            <label className="weight-medium px-1">/</label>
            <Link className="link weight-medium text-underline" to="/">
              Adidas
            </Link>
            <label className="weight-medium px-1">/</label>
            <label className="weight-medium">Adidas Black T-Shirt</label>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
