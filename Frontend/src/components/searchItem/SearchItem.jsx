import React from "react";
import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf2.bstatic.com/xdata/images/hotel/square600/553696533.webp?k=8c08f0a2f97625ba5ca25f9535420f1aeed1f861b180508de3228c90f0431d35&o="
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Airconditioning
        </span>
        <span className="siFeatures">
          Entire Studio . 1 bathroom .21m<sup>2</sup> 1 full bed
        </span>
        <span className="sicancelop">Free Cancellation</span>
        <span className="sicancelopsubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
