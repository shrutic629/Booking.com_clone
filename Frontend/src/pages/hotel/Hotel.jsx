import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/maillist/MailList";
import Footer from "../../components/footer/Footer";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/468226046.jpg?k=a000fb6c945d6ffa5676cf126ca7b9953fcbec3b37056cdbba53a790cb198d6e&o=&hp=1",
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/468225660.jpg?k=7079d3d9fba9dea1b9e4bca6085337261fb7ea58ec578bbfe526d35d425d96d1&o=&hp=1",
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/468225666.jpg?k=9e94efd778d44fd567acf53945900b10671419a36691c0adb3402f46163c1f27&o=&hp=1",
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/468225665.jpg?k=e14a875e1c3adb85c005acfa567305b9849a7dd8608a6d218f0b396df373f022&o=&hp=1",
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/468225646.jpg?k=0e832bc601a368fd3ef77d2eedefdc99b43dd55c7a1334ca3828734bfef5c77c&o=&hp=1",
    },
    {
      src: "https://cf2.bstatic.com/xdata/images/hotel/max1024x768/468225679.jpg?k=fa398ad009a392cfc96fc8cd4766422b030078ef5a7242acb882e74dbc3ad542&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow"/>
            <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderimg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"/>
          </div>
        }
        <div className="hotelwrapper">
          <button className="booknow">Reserver or Book Now</button>
          <h1 className="hotelTitle">Grand hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500 from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5min walk from St. florian's gate in Krakow, Tower
                street apartment has accomodation with air conditioning and free
                wi-fi.the units come with hardwood floors and feature a fully
                equiped kitchenette with a microwave, a flat screen tv, and a
                private bathroom with shower and a hairdryer. A fridge is also
                offered, as well as electric tea pot and a coffee
                machine.Popular point of interest near apartment include Cloth
                hall, Main market square and a town hall tower.The nearest
                airport is John Paul II International Krakow-Balice, 16.1 km
                from tower street apartment and the property offers a paid
                airport shuttle services.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow , this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
