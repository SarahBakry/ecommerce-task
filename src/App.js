import React, { Component, Suspense, lazy } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { history } from "./services/helpers/history";
import Footer from "./components/Footer/Footer";
const ItemDetails = lazy(() => import("./pages/ItemDetails/ItemDetails"));
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      brandLogo: undefined,
      breadcrumb: [],
      cartItemsTotalCount: 0,
    };
  }
  setBrandLogo(logo) {
    this.setState({ brandLogo: logo });
  }
  setCartItems(updatedItems) {
    this.setState({ cartItems: [...updatedItems] });
  }
  setBreadcrumb(updatedBreadcrumb) {
    this.setState({ breadcrumb: [...updatedBreadcrumb] });
  }
  setCartItemsTotalCount(count) {
    this.setState({ cartItemsTotalCount: count });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartItemsTotalCount !== this.state.cartItemsTotalCount) {
      console.log(this.state.cartItems, "this.state.cartItems");
    }
  }
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Navbar
            brandLogo={this.state.brandLogo}
            cartItems={this.state.cartItems}
            cartItemsTotalCount={this.state.cartItemsTotalCount}
            breadcrumb={this.state.breadcrumb}
            setCartItems={this.setCartItems.bind(this)}
            setCartItemsTotalCount={this.setCartItemsTotalCount.bind(this)}
          />
          <Suspense fallback={<div className="loading">Loading ...</div>}>
            <Routes>
              <Route
                /* path="/ecommerce-task/" */
                exact
                path="/"
                element={
                  <ItemDetails
                    cartItems={this.state.cartItems}
                    setCartItems={this.setCartItems.bind(this)}
                    setBrandLogo={this.setBrandLogo.bind(this)}
                    setBreadcrumb={this.setBreadcrumb.bind(this)}
                    setCartItemsTotalCount={this.setCartItemsTotalCount.bind(
                      this,
                    )}
                  />
                }
              ></Route>
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
