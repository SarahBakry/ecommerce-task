import React, { Component } from "react";
class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rateValue: 0,
      totalRateCount: 0,
      remainingRate: 5,
    };
  }
  componentDidMount() {
    if (this.props.rateValue) {
      this.setState({
        rateValue: this.props.rateValue,
        remainingRate: 5 - parseInt(this.props.rateValue),
        totalCountOfRates: this.props.totalCountOfRates,
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.rateValue !== this.props.rateValue) {
      this.setState({
        rateValue: this.props.rateValue,
        remainingRate: 5 - parseInt(this.props.rateValue),
        totalCountOfRates: this.props.totalCountOfRates,
      });
    }
  }
  render() {
    return (
      <div className="w-100 flex py">
        <div className="flex">
          {parseInt(this.state.rateValue) > 0
            ? Array.from(Array(parseInt(this.state.rateValue)).keys()).map(
                (x) => (
                  <img
                    key={`${this.props.id}_fill_${x}`}
                    src={process.env.PUBLIC_URL + "/images/filledStar.svg"}
                    alt=""
                    width={15}
                    height={15}
                    className="me"
                  />
                ),
              )
            : ""}

          {this.state.remainingRate > 0
            ? Array.from(Array(this.state.remainingRate).keys()).map((x) => (
                <img
                  key={`${this.props.id}_hollow_${x}`}
                  src={process.env.PUBLIC_URL + "/images/hollowStar.svg"}
                  alt=""
                  width={15}
                  height={15}
                  className="me"
                />
              ))
            : ""}
        </div>
        <div className="fz-14 bold px-2">{this.state.rateValue} of 5</div>
        <div className="fz-12 weight-medium flex align-center font-gray ">
          {this.state.totalCountOfRates} Rates
        </div>
      </div>
    );
  }
}
export default Rate;
