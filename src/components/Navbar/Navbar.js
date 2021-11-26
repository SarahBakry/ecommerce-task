import React, { Component } from "react";
import { Link } from "react-router-dom";
/* import menu from "../../../public/images/menu.svg"; */
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openCart: false,
      totalCart: 0,
    };
  }
  componentDidMount() {
    console.log(process.env.PUBLIC_URL, "process.env.PUBLIC_URL");
  }
  componentDidUpdate(prevProps) {
    if (prevProps.cartItems !== this.props.cartItems) {
      let total = 0;
      this.props.cartItems?.forEach((item) => {
        total += parseInt(item.price);
      });
      this.setState({ totalCart: total });
    }
  }
  removeItemCart = (index) => {
    const UpdatedItem = [...this.props.cartItems];
    UpdatedItem.splice(index, 1);
    console.log(UpdatedItem, "UpdatedItem");
    this.props.setCartItems(UpdatedItem);
    let count = 0;
    UpdatedItem.forEach((item) => {
      count += item.quantity;
    });
    this.props.setCartItemsTotalCount(count);
  };
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
              <div className="left-inner-addon">
                <img
                  src={process.env.PUBLIC_URL + "/images/search.svg"}
                  alt=""
                  width={15}
                  height={15}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="flex align-center">
              {this.props.brandLogo ? (
                <img src={this.props.brandLogo} alt="" width={70} height={50} />
              ) : (
                ""
              )}
            </div>
            <div className="flex">
              <div className="flex px-2">
                <div
                  className="flex align-center relative"
                  onClick={() => {
                    this.setState({ openCart: true });
                  }}
                >
                  <img
                    width={30}
                    height={30}
                    src={process.env.PUBLIC_URL + "/images/bag.svg"}
                    alt=""
                  />
                  <div className="cart-count">
                    {this.props.cartItemsTotalCount > 9
                      ? "9+"
                      : this.props.cartItemsTotalCount}
                  </div>
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
        {this.state.openCart ? (
          <div className="cart-overlay flex justify-end">
            <div className="bg-white w-400px h-100  p-2 scroll-y">
              <div className="flex flex-wrap">
                <div className="w-100 flex justify-end ">
                  <img
                    src={process.env.PUBLIC_URL + "/images/closeCart.svg"}
                    alt=""
                    width={15}
                    height={15}
                    onClick={() => {
                      this.setState({ openCart: false });
                    }}
                  />
                </div>
                <div className="w-100 flex justify-center fz-20 font-secondary bold">
                  My Cart
                </div>
                <div className="w-100  fz-14 py-3 weight-medium">
                  Cart Summary
                </div>
                {this.props.cartItems?.length ? (
                  <>
                    {this.props.cartItems.map((item, index) => (
                      <div className="w-100 mb-2 flex flex-wrap border-radius-5 darkShadow p-1">
                        <div
                          className="w-30  flex align-center border-radius-5"
                          style={{ backgroundColor: "#ECEEF0" }}
                        >
                          <img
                            src={item.color?.imageSrc}
                            alt=""
                            style={{ width: "100%", objectFit: "contain" }}
                          />
                        </div>
                        <div className="w-70 px-1">
                          <div className="w-100 bold fz-12 pb-1">
                            {item.description}
                          </div>
                          <div className="w-100 flex flex-wrap">
                            <div className="w-60">
                              <div className="w-100 fz-10 weight-medium ">
                                {`Quantity: ${item.quantity}`}
                              </div>
                              <div className="w-100 fz-10 weight-medium ">
                                {`Size: ${item.size?.value}`}
                              </div>
                              <div className="w-100 fz-14 bold font-secondary flex py">
                                {item.price}
                                <span className="fz-12 weight-medium flex align-end px">
                                  {item.currency}
                                </span>
                              </div>
                            </div>
                            <div className="flex w-40 align-end">
                              <button
                                className="w-100 bg-primary flex justify-center align-center fz-12 br-20 p bold border-0"
                                onClick={() => {
                                  this.removeItemCart(index);
                                }}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="w-100 flex justify-center fz-24 bold">
                      {`Total: ${this.state.totalCart} ${this.props.cartItems[0]?.currency}`}
                    </div>

                    <div className="flex w-100 flex-wrap">
                      <div className="w-50 py-2">
                        <button className="w-100  bg-primary flex justify-center align-center fz-12 br-20 p-1  bold border-0">
                          Review Cart
                        </button>
                      </div>
                      <div className="w-50 px-1 py-2">
                        <div className="w-100 bg-secondary flex justify-center align-center fz-12 br-20 p-1 bold font-white">
                          Complete Checkout
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default Navbar;
