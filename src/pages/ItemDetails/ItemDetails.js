import React, { Component } from "react";
import Card from "../../components/Card/Card";
import Rate from "../../components/Rate/Rate.";
import Slider from "../../components/Slider/Slider";
import { getProductById } from "../../services/Products/Product";

// useParams
class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Product: undefined,
      quantity: 0,
      selectedColor: undefined,
      selectedSize: undefined,
    };
  }
  componentDidMount() {
    const product = getProductById();
    this.setState({ Product: { ...product } });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.Product !== prevState.Product) {
      if (this.state.Product) {
        if (this.state.Product.brandLogo) {
          this.props.setBrandLogo(this.state.Product.brandLogo);
          this.props.setBreadcrumb(this.state.Product.breadcrumb);
        }
      }
    }
  }
  addToCart = () => {
    return new Promise((resolve) => {
      const updatedItems = this.props.cartItems
        ? [...this.props.cartItems]
        : [];
      const cartItem = {
        id: this.state.Product?.id,
        description: this.state.Product?.description,
        price: this.state.Product?.priceAfterDiscount,
        currency: this.state.Product?.currency,
        color: this.state.selectedColor,
        size: this.state.selectedSize,
        quantity: this.state.quantity,
        cartItemId: `${this.state.Product?.id}_${this.state.selectedColor.id}_${this.state.selectedSize.id}`,
      };
      const foundItemIndex = updatedItems.findIndex(
        (item) => item.cartItemId === cartItem.cartItemId,
      );
      if (updatedItems[foundItemIndex]) {
        updatedItems[foundItemIndex].quantity =
          updatedItems[foundItemIndex].quantity + cartItem.quantity;
      } else {
        updatedItems.push(cartItem);
      }
      this.props.setCartItems([...updatedItems]);
      let count = 0;
      updatedItems.forEach((item) => {
        count += item.quantity;
      });
      this.props.setCartItemsTotalCount(count);
      resolve();
    });
  };
  render() {
    return (
      <div className="w-100">
        <div className="container flex flex-wrap py-3">
          <div className="w-50  ">
            <Slider images={this.state.Product?.images} />
          </div>
          <div className="w-50  px-4 py">
            <div className="w-100 flex flex-wrap">
              <div className="w-100">
                {this.state.Product ? (
                  <img
                    src={this.state.Product.brandLogo}
                    width={45}
                    height={45}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="w-100 weight-medium fz-14">
                <p className="w-70 m-0 py">{this.state.Product?.description}</p>
              </div>
              <p className="w-70 m-0 py font-lightGray weight-medium fz-14">
                {this.state.Product?.mainCategory}
              </p>
              <Rate
                id={this.state.Product?.id}
                rateValue={this.state.Product?.rateValue}
                totalCountOfRates={this.state.Product?.totalCountOfRates}
              />
              <div className="flex w-100 border-b-lightGray pb-2">
                <div className="flex font-secondary bold fz-24 py">
                  {`${this.state.Product?.priceAfterDiscount}`}

                  <span className="fz-14 weight-medium flex align-end py px-1">
                    {`${this.state.Product?.currency}`}
                  </span>
                </div>
                {this.state.Product?.discountPercentage ? (
                  <>
                    <div className="flex align-center font-lightGray line-through fz-12 p-1">
                      {`${this.state.Product.price} ${this.state.Product.currency}`}
                    </div>
                    <div className="flex align-center px-1">
                      <div className="bg-primary p fz-12 border-radius-3 weight-medium">
                        {this.state.Product.discountPercentage}% off
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="w-100 bold fz-14 py-1">Size</div>
              <div className="w-100 font-secondary fz-10 bold py-1 flex  border-b-lightGray">
                {this.state.Product?.sizes?.map((size) => (
                  <p
                    key={`size${size.id}`}
                    className={`circle-50 border flex align-center justify-center me ${
                      this.state.selectedSize?.id === size.id
                        ? "selected-size"
                        : ""
                    }`}
                    onClick={() => {
                      if (
                        this.state.selectedSize &&
                        this.state.selectedSize.id === size.id
                      ) {
                        this.setState({ selectedSize: undefined });
                      } else {
                        this.setState({ selectedSize: { ...size } });
                      }
                    }}
                  >
                    {/* selected-size */}
                    {size.value}
                  </p>
                ))}
              </div>
              <div className="w-100 bold fz-14 py-1">Color</div>
              <div className="w-100 py-1 flex flex-wrap border-b-lightGray ">
                {this.state.Product?.colors?.map((color) => (
                  <img
                    key={`color${color.id}`}
                    src={color.imageSrc}
                    width={70}
                    height={70}
                    className={`me-1  ${
                      this.state.selectedColor?.id === color.id
                        ? "selected-image"
                        : ""
                    }`} /*  */
                    alt=""
                    onClick={() => {
                      if (
                        this.state.selectedColor &&
                        this.state.selectedColor.id === color.id
                      ) {
                        this.setState({ selectedColor: undefined });
                      } else {
                        this.setState({ selectedColor: { ...color } });
                      }
                    }}
                  />
                ))}
              </div>
              <div className="w-100 bold fz-14 py-1">Quantity</div>

              <div className="w-100 py">
                <div className="w-50 br-20 bg-lightGray2 flex justify-between p">
                  <div
                    className="bg-primary circle-25 flex align-center justify-center"
                    onClick={() => {
                      if (this.state.quantity > 0) {
                        this.setState({ quantity: this.state.quantity - 1 });
                      }
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/minus.svg"}
                      alt=""
                    />
                  </div>
                  <label className="font-secondary bold fz-14 flex align-center justify-center">
                    {this.state.quantity}
                  </label>
                  <div
                    className="bg-primary circle-25 flex align-center justify-center"
                    onClick={() => {
                      this.setState({ quantity: this.state.quantity + 1 });
                    }}
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/images/plus.svg"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-100 flex-wrap">
                <div className="w-50 py-2">
                  <button
                    className="w-100 bg-secondary flex justify-center align-center fz-12 br-20 p-1 font-white bold border-0"
                    onClick={() => {
                      this.addToCart().then(() => {
                        this.setState({
                          selectedColor: undefined,
                          selectedSize: undefined,
                          quantity: 0,
                        });
                      });
                    }}
                    disabled={
                      !(
                        this.state.selectedSize &&
                        this.state.selectedColor &&
                        this.state.quantity
                      )
                    }
                  >
                    Add To Cart
                  </button>
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
              {this.state.Product?.similarProducts?.map((item) => (
                <div
                  key={`SimilarProducts${item.id}`}
                  id={`SimilarProducts${item.id}`}
                  className="me-2"
                  style={{ width: "220px" }}
                >
                  <Card item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ItemDetails;
