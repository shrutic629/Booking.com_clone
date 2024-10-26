import React from "react";
import "./Featured.css";
import useFetch from "../../hooks/useFetch.js";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/hotels/countByCity?cities=maldives,goa,jaipur"
  );
  // console.log(data)
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://static1.evcdn.net/images/reduction/355607_w-600_h-600_q-70_m-crop.jpg"
              alt="image not found"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2 className="fCountryName">Maldives</h2>
              <span className="pCount">{data[0]} Properties</span>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://static.wanderon.in/wp-content/uploads/2024/07/places-to-visit-in-goa-in-july.jpg"
              alt="image not found"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2 className="fCountryName">Goa</h2>
              <span className="pCount">{data[1]} Properties</span>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://img.etimg.com/thumb/msid-70104165,width-650,height-488,imgsize-1445127,resizemode-75/jaipur_gettyimages.jpg"
              alt="image not found"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2 className="fCountryName">Jaipur</h2>
              <span className="pCount">{data[2]} Properties</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
